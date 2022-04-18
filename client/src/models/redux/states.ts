import { IUser } from "../IUser";

export interface LoadingStateType {
    isLoadingAuth: boolean
}

export interface LoginState {
    user: IUser;
    isAuth: boolean
}

export interface RegistrationState {
    user: IUser
}

export interface UsersState {
    users: IUser[]
}