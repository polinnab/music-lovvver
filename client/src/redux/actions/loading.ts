import { LoadingActions, LoadingAction } from "../../models/redux/Loading";

export const loadingUsersAction = (payload: boolean): LoadingAction => {
    return {type: LoadingActions.AUTH_LOADING, payload }
}