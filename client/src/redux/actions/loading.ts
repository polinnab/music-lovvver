import { LoadingActionTypes, LoadingAction } from "../../models/redux-types/actions"

export const loadingUsersAction = (payload: boolean): LoadingAction => {
    return {type: LoadingActionTypes.AUTH_LOADING, payload }
}