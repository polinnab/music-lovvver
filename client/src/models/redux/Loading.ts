export interface LoadingStateType {
    isLoadingAuth: boolean
}

export enum LoadingActions {
    AUTH_LOADING = "AUTH_LOADING"
}

export interface LoadingAction {
    type: LoadingActions.AUTH_LOADING;
    payload: boolean
}