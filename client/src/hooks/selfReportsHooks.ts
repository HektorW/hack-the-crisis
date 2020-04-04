import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../modules/allReducers';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import firebase from 'firebase';
import { useCallback } from 'react';

export function useGetUser() {
  const user = useSelector((state: AppState) => state.firebase.auth);

  return user;
}

// TODO MOVE
interface TempReport {
  questionId: string,
  answerId: number
  answeredDate: number
}

interface TempSelfReport {
  questionaries: TempReport[]
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

  if(selfReport && selfReport.length > 0) {
    return selfReport[0]
  }

  return null
}

export function useDispatchSelfReport() {
  const firestore = useFirestore();
  const user = useGetUser();

  return useCallback(function dispatchSelfReport(reports : TempReport[]) {
    console.log('called')
    // reports.forEach(function(report) {
      firestore
      .collection('selfreports')
      .doc(user.uid)
      // TODO -> reports into update
      .update({
        // Union is needed here as we only want to append to list
        questionaries: firebase.firestore.FieldValue.arrayUnion(...reports)
      })
    // }

  }, [firestore])

}

