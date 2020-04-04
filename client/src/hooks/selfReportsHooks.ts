import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../modules/allReducers';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import firebase from 'firebase';
import { useCallback } from 'react';
import HealthCheckNames from '../enums/HealthCheckNames';

export function useGetUser() {
  const user = useSelector((state: AppState) => state.firebase.auth);

  return user;
}

// TODO MOVE
interface TempReport {
  questionId: string
  answerId: number
  answeredDate: string
}

interface TempSelfReport {
  questionaries: TempReport[],
  updated: string,
  created?: string
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
  const selfReport : TempSelfReport[] = useSelector((state: any) => state.firestore.ordered.selfreports);

  // TODO, make more beautiful
  if(selfReport && selfReport.length > 0) {
    return selfReport[0]
  }

  return null
}

export function useDispatchSelfReport() {
  const firestore = useFirestore();
  const user = useGetUser();

  return useCallback( async function dispatchSelfReport(reports : TempReport[]) {
    let document = await firebase.firestore().collection("selfreports").doc(user.uid).get();

    if (document && document.exists) {
      await document.ref.update({
        updated: new Date().toISOString(),
        // Union is needed here as we only want to append to list
        questionaries: firebase.firestore.FieldValue.arrayUnion(...reports)
      })
    } else {
      await document.ref.set({
        updated: new Date().toISOString(),
        created: new Date().toISOString(),
        questionaries: reports
      } as TempSelfReport, { merge: true })
    }
  }, [firestore])

}

