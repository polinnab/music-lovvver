import { IUser } from "../IUser";

export interface LoginStateType {
    user: IUser;
    isAuth: boolean;
    error: string
}

export enum LoginActions {
    LOGIN = "LOGIN",
    ASYNC_LOGIN = "ASYNC_LOGIN",
    LOGOUT = "LOGOUT",
    ASYNC_LOGOUT = "ASYNC_LOGOUT",
    CHECK_AUTH = "CHECK_AUTH",
    ASYNC_CHECK_AUTH = "ASYNC_CHECK_AUTH",
    LOGIN_ERROR = "LOGIN_ERROR"
}

export interface LoginAction {
    type: LoginActions.LOGIN;
    payload: IUser
}

export interface AsyncLoginAction {
    type: LoginActions.ASYNC_LOGIN;
    payload: any
}

export interface LogoutAction {
    type: LoginActions.LOGOUT
}

export interface AsyncLogoutAction {
    type: LoginActions.ASYNC_LOGOUT
}

export interface CheckAuthAction {
    type: LoginActions.CHECK_AUTH;
    payload: IUser
}

export interface AsyncCheckAuthAction {
    type: LoginActions.ASYNC_CHECK_AUTH;
}

export interface LoginError {
    type: LoginActions.LOGIN_ERROR;
    payload: string
}

export type LoginActionGeneral = LoginAction | LogoutAction | CheckAuthAction | AsyncLoginAction | AsyncLogoutAction | AsyncCheckAuthAction | LoginError;