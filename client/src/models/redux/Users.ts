import { IUser } from "../IUser";

export interface UsersStateType {
    users: IUser[],
    error: string
}

export enum UsersActions {
    GET_USERS = "GET_USERS",
    FETCH_USERS = "FETCH_USERS",
    SET_ERROR = "SET_ERROR"
}

export interface GetUsersAction {
    type: UsersActions.GET_USERS;
    payload: IUser[]
}

export interface FetchUsersAction {
    type: UsersActions.FETCH_USERS;
    payload?: any
}
export interface SetErrorAction {
    type: UsersActions.SET_ERROR;
    payload: string
}

export type UsersAction = GetUsersAction | FetchUsersAction | SetErrorAction