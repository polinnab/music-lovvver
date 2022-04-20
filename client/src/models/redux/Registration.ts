import { IUser } from "../IUser";

export interface RegistrationStateType {
    user: IUser
}

export enum RegistrationActions {
    REGISTRATION = "REGISTRATION",
    ASYNC_REGISTRATION = "ASYNC_REGISTRATION"
}

export interface RegistrationAction {
    type: RegistrationActions.REGISTRATION;
    payload: IUser
}

export interface AsyncRegistrationAction {
    type: RegistrationActions.ASYNC_REGISTRATION;
    payload: any
}


