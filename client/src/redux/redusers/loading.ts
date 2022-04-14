import { LoadingActions } from "../actions/loading"

const inilialState = {
    isLoadingAuth: false
}

export const loadingReducer = (state = inilialState, action: any) => {
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