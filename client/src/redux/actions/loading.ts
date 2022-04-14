import { LoadingActionTypes, LoadingAction } from "../../models/redux-types/actions"

export const loadingUsersAction = (payload: any): LoadingAction => {
    return {type: LoadingActionTypes.AUTH_LOADING, payload }
}