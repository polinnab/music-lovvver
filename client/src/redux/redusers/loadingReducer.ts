import { LoadingActionTypes, LoadingAction } from "../../models/redux-types/actions";
import { LoadingStateType } from "../../models/redux-types/states"

const inilialState: LoadingStateType = {
    isLoadingAuth: false
}

export const loadingReducer = (state = inilialState, action: LoadingAction): LoadingStateType => {
    const {type, payload} = action

    switch(type) {
        case LoadingActionTypes.AUTH_LOADING:
        return {
            ...state,
            isLoadingAuth: payload
        }

        default:
            return state
    }
}
