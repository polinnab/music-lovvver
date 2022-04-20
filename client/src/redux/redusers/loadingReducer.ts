import { LoadingActions, LoadingAction, LoadingStateType } from "../../models/redux/Loading";

const inilialState: LoadingStateType = {
    isLoadingAuth: false
}

export const loadingReducer = (state = inilialState, action: LoadingAction): LoadingStateType => {
    const {type, payload} = action

    switch(type) {
        case LoadingActions.AUTH_LOADING:
        return {
            ...state,
            isLoadingAuth: payload
        }

        default:
            return state
    }
}
