import { IUser } from "../IUser";

export interface LoginStateType {
    user: IUser;
    isAuth: boolean
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