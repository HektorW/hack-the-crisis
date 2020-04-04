import { useSelector } from 'react-redux'
import { AppState, ReportValue, Question } from '../modules/allReducers';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import firebase from 'firebase';
import { useCallback } from 'react';
import HealthCheckNames from '../enums/HealthCheckNames';

export function useGetUser() {
  const user = useSelector((state: AppState) => state.firebase.auth);

  return user;
}

export function useGetSelfReport() {
  const user = useGetUser();

  // Policy on on the selfreports collection is that a user can only fetch their own documents by uid
  useFirestoreConnect([
    {
      collection: 'selfreports',
      doc: user.uid
    }
  ])

  // TODO, fix so that this is typed from reducer
  const selfReport = useSelector((state: AppState) => state.firestore.ordered.selfreports);

  // TODO, make more beautiful
  if(selfReport && selfReport.length > 0) {
    return selfReport[0].questionaries.filter(x => x.questionId === HealthCheckNames.Coughing)
  }

  return null
}

export function useDispatchSelfReport() {
  const firestore = useFirestore();
  const user = useGetUser();

  return useCallback( async function dispatchSelfReport(reports : Question[]) {
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

