import { LoadingActionTypes, LoadingAction } from "../../models/redux/Loading";

export const loadingUsersAction = (payload: boolean): LoadingAction => {
    return {type: LoadingActionTypes.AUTH_LOADING, payload }
}