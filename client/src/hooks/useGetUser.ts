import { useSelector } from "react-redux";
import { AppState } from "../modules/allReducers";

export function useGetUser() {
  const user = useSelector((state: AppState) => state.firebase.auth);

  return user;
}
