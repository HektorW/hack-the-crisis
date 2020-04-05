import { useSelector } from 'react-redux'
import { AppState, ReportValue, AllQuestions } from '../modules/allReducers';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import firebase from 'firebase';
import { useCallback } from 'react';
import { useGetUser } from './useGetUser';
import HealthCheckNames from '../enums/HealthCheckNames';
import { BreathingProblemAnsers, CoronaContactAnswers, CoughAnswers, EnergyAnswers } from '../enums/HealthCheckAnswers';

export function useGetSelfReports(type: HealthCheckNames) {
  const user = useGetUser();

  // Policy on on the selfreports collection is that a user can only fetch their own documents by uid
  useFirestoreConnect([
    {
      collection: 'selfreports',
      doc: user.uid
    }
  ])

  const selfReport = useSelector((state: AppState) => state.firestore.ordered.selfreports);

  // TODO, make more beautiful & Transform the enum values to the same dialog texts.
  if(selfReport && selfReport.length > 0) {
    return selfReport[0].questionaries.filter(x => x.questionId === type).map(question => {
      let mappedAnswer : string | number;
      switch(question.questionId) {
        case HealthCheckNames.BreathingProblem:
          mappedAnswer = BreathingProblemAnsers[question.answerId]
          break;
        case HealthCheckNames.CoronaContact:
          mappedAnswer = CoronaContactAnswers[question.answerId]
          break;
        case HealthCheckNames.Coughing:
          mappedAnswer = CoughAnswers[question.answerId]
          break;
        case HealthCheckNames.Energy:
          mappedAnswer = EnergyAnswers[question.answerId]
          break;
        default:
          mappedAnswer = question.answerId
          break;
      }

      return {
        ...question,
        answerId: mappedAnswer
      }
    })
  }



  return null
}

export function useDispatchSelfReport() {
  const firestore = useFirestore();
  const user = useGetUser();

  return useCallback( async function dispatchSelfReport(reports : AllQuestions[]) {
    let document = await firebase.firestore().collection("selfreports").doc(user.uid).get();

    if (document && document.exists) {
      await document.ref.update({
        updatedDate: new Date().toISOString(),
        // Union is needed here as we only want to append to list
        questionaries: firebase.firestore.FieldValue.arrayUnion(...reports)
      })
    } else {
      await document.ref.set({
        updatedDate: new Date().toISOString(),
        createdDate: new Date().toISOString(),
        questionaries: reports
      } as ReportValue, { merge: true })
    }
  }, [firestore])

}

