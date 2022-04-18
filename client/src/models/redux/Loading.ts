import { IUser } from "../IUser";

export interface LoadingStateType {
    isLoadingAuth: boolean
}

export enum LoadingActionTypes {
    AUTH_LOADING = "AUTH_LOADING"
}

export interface LoadingAction {
    type: LoadingActionTypes.AUTH_LOADING;
    payload: boolean
}