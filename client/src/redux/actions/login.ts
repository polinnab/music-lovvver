import { IUser } from "../../models/IUser";
import { AsyncCheckAuthAction, AsyncLoginAction, AsyncLogoutAction, CheckAuthAction, LoginAction, LoginActions, LogoutAction } from "../../models/redux/Login";


export const loginAction = (payload: IUser): LoginAction => {
    return { type: LoginActions.LOGIN, payload }
}

export const asyncLoginAction = (payload: any): AsyncLoginAction => {
    return { type: LoginActions.ASYNC_LOGIN, payload }
}

export const logoutAction = (): LogoutAction => {
    return { type: LoginActions.LOGOUT }
}

export const asyncLogoutAction = (): AsyncLogoutAction => {
    return { type: LoginActions.ASYNC_LOGOUT }
}

export const checkAuthAction = (payload: IUser): CheckAuthAction => {
    return { type: LoginActions.CHECK_AUTH, payload}
}

export const asyncCheckAuthAction = (): AsyncCheckAuthAction => {
    return { type: LoginActions.ASYNC_CHECK_AUTH }
}
