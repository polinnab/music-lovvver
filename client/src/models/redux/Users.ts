import { IUser } from "../IUser";

export interface UsersStateType {
    users: IUser[]
}

export enum UsersActionTypes {
    GET_USERS = "GET_USERS"
}

export interface UsersAction {
    type: UsersActionTypes.GET_USERS;
    payload: IUser[]
}