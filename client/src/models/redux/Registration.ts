import { IUser } from "../IUser";

export interface RegistrationStateType {
    user: IUser
}

export enum RegistrationActionTypes {
    REGISTRATION = "REGISTRATION"
}

export interface RegistrationAction {
    type: RegistrationActionTypes.REGISTRATION;
    payload: IUser
}

