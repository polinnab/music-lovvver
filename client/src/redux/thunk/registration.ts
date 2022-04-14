import AuthService from "../../services/AuthService";
import { loginAction } from "../actions/login";
import { registrationAction } from "../actions/registration";

export const registrationThunk = (email: string, password: string) => {
    return async function (dispatch: any) {
        try {
            const response = await AuthService.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);
            dispatch(registrationAction(response.data.user))
            dispatch(loginAction(response.data.user))
        } catch(e: any) {
            console.log(e.response?.data?.message)
        }
    }
}