import { checkAuthAction, loginAction, logoutAction } from "../actions/login";
import AuthService from "../../services/AuthService";
import axios from "axios";
import { API_URL } from "../../http";
import { loadingUsersAction } from "../actions/loading";

export const loginThunk = (email: string, password: string) => {
    return async function(dispatch: any) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            dispatch(loginAction(response.data.user))
        } catch(e: any) {
            console.log(e.response?.data?.message)
        }
    }
}

export const logoutThunk = () => {
    return async function(dispatch: any) {
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token');
            dispatch(logoutAction());
        } catch(e: any) {
            console.log(e.response?.data?.message)
        }
    }
}

export const checkAuthThunk = () => {
    return async function(dispatch: any) {
        dispatch(loadingUsersAction(true))
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            dispatch(checkAuthAction(response.data.user))
        } catch(e: any) {
            console.log(e.response?.data?.message)
        }
        dispatch(loadingUsersAction(false))
    }
}
