export const LoginActions = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    CHECK_AUTH: "CHECK_AUTH"
}

export const loginAction = (payload: any) => {
    return { type: LoginActions.LOGIN, payload }
}

export const logoutAction = () => {
    return { type: LoginActions.LOGOUT }
}

export const checkAuthAction = () => {
    return { type: LoginActions.CHECK_AUTH }
}