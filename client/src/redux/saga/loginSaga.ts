import { put, takeLatest, call } from "@redux-saga/core/effects";
import { AsyncLoginAction, LoginActions } from "../../models/redux/Login";
import { AuthResponse } from "../../models/response/AuthResponse";
import AuthService from "../../services/AuthService";
import { checkAuthAction, loginAction, loginErrorAction, logoutAction } from "../actions/login";
import axios from "axios";
import { API_URL } from "../../http";
import { loadingUsersAction } from "../actions/loading";

interface WorkerResponse {
    data: AuthResponse
}

function* loginWorker(action: AsyncLoginAction): Generator<any, void, WorkerResponse> {
    const {
        payload: {email, password}
    } = action;

    try {
        const response = yield AuthService.login(email, password)
        // we can use yield AuthService.login.. or yield call($api.post... No difference
        // const response = yield call($api.post, '/login', {email, password})

        localStorage.setItem('token', response.data.accessToken);
        yield put(loginAction(response.data.user));
    } catch(e: any) {
        console.log(e.response.data.message)
        yield put(loginErrorAction(e.response.data.message))
    }
}

function* logoutWorker(): Generator<any, void, WorkerResponse> {
    try {
        yield AuthService.logout()
        localStorage.removeItem('token');
        yield put(logoutAction());
    } catch(e: any) {
        console.log(e.response.data.message)
    }
}

function* checkAuthWorker(): Generator<any, void, WorkerResponse> {
    yield put(loadingUsersAction(true))
    try {
        const response = yield call(axios.get, `${API_URL}/refresh`, {withCredentials: true});
        localStorage.setItem('token', response.data.accessToken);
        yield put(checkAuthAction(response.data.user));
    } catch(e: any) {
        console.log(e.response.data.message)
    }
    yield put(loadingUsersAction(false))

}

export function* loginWatcher() {
    yield takeLatest(LoginActions.ASYNC_LOGIN, loginWorker)
    yield takeLatest(LoginActions.ASYNC_LOGOUT, logoutWorker)
    yield takeLatest(LoginActions.ASYNC_CHECK_AUTH, checkAuthWorker)
}
