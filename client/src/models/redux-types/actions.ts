import { IUser } from "../IUser";

export enum LoadingActionTypes {
    AUTH_LOADING = "AUTH_LOADING"
}

export interface LoadingAction {
    type: LoadingActionTypes.AUTH_LOADING;
    payload: boolean
}

export enum LoginActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    CHECK_AUTH = "CHECK_AUTH"
}

export interface LoginAction {
    type: LoginActionTypes.LOGIN;
    payload: IUser
}

export interface LogoutAction {
    type: LoginActionTypes.LOGOUT
}

export interface CheckAuthAction {
    type: LoginActionTypes.CHECK_AUTH;
    payload: IUser
}

export type LoginActionGeneral = LoginAction | LogoutAction | CheckAuthAction;

export enum RegistrationActionTypes {
    REGISTRATION = "REGISTRATION"
}

export interface RegistrationAction {
    type: RegistrationActionTypes.REGISTRATION;
    payload: IUser
}

export enum UsersActionTypes {
    GET_USERS = "GET_USERS"
}

export interface UsersAction {
    type: UsersActionTypes.GET_USERS;
    payload: IUser[]
}