import { IUser } from "../IUser";

export interface UsersStateType {
    users: IUser[]
}

export enum UsersActions {
    GET_USERS = "GET_USERS",
    FETCH_USERS = "FETCH_USERS"
}

export interface GetUsersAction {
    type: UsersActions.GET_USERS;
    payload: IUser[]
}

export interface FetchUsersAction {
    type: UsersActions.FETCH_USERS;
    payload?: any
}

export type UsersAction = GetUsersAction | FetchUsersAction