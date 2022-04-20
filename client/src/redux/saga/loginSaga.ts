import { put, takeEvery } from "@redux-saga/core/effects";
import { AsyncLoginAction, LoginActions } from "../../models/redux/Login";
import { AuthResponse } from "../../models/response/AuthResponse";
import AuthService from "../../services/AuthService";
import { checkAuthAction, loginAction, logoutAction } from "../actions/login";
import axios from "axios";
import { API_URL } from "../../http";

interface WorkerResponse {
    data: AuthResponse
}

function* loginWorker(action: AsyncLoginAction): Generator<any, void, WorkerResponse> {
    const {
        payload: {email, password}
    } = action;

    const response = yield AuthService.login(email, password)
    localStorage.setItem('token', response.data.accessToken);
    yield put(loginAction(response.data.user));
}

function* logoutWorker(): Generator<any, void, WorkerResponse> {
    yield AuthService.logout()
    localStorage.removeItem('token');
    yield put(logoutAction());
}

function* checkAuthWorker(): Generator<any, void, WorkerResponse> {

    const response = yield axios.get(`${API_URL}/refresh`, {withCredentials: true});
    localStorage.setItem('token', response.data.accessToken);
    yield put(checkAuthAction(response.data.user));
}

export function* loginWatcher() {
    yield takeEvery(LoginActions.ASYNC_LOGIN, loginWorker)
    yield takeEvery(LoginActions.ASYNC_LOGOUT, logoutWorker)
    yield takeEvery(LoginActions.ASYNC_CHECK_AUTH, checkAuthWorker)
}


// TODO: add error handler for catched errors