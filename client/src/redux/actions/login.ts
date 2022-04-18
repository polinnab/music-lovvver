import { IUser } from "../../models/IUser";
import { CheckAuthAction, LoginAction, LoginActionTypes, LogoutAction } from "../../models/redux/Login";


export const loginAction = (payload: IUser): LoginAction => {
    return { type: LoginActionTypes.LOGIN, payload }
}

export const logoutAction = (): LogoutAction => {
    return { type: LoginActionTypes.LOGOUT }
}

export const checkAuthAction = (payload: IUser): CheckAuthAction => {
    return { type: LoginActionTypes.CHECK_AUTH, payload}
}
