import { put, takeLatest } from "@redux-saga/core/effects";
import { AsyncRegistrationAction, RegistrationActions } from "../../models/redux/Registration";
import { AuthResponse } from "../../models/response/AuthResponse";
import AuthService from "../../services/AuthService";
import { loginAction } from "../actions/login";
import { registrationAction } from "../actions/registration";

interface WorkerResponse {
    data: AuthResponse
}

function* registrationWorker(action: AsyncRegistrationAction): Generator<any, void, WorkerResponse> {
    const {
        payload: {email, password}
    } = action;

    try {
        const response = yield AuthService.registration(email, password)
        localStorage.setItem('token', response.data.accessToken);
        yield put(registrationAction(response.data.user));
        yield put(loginAction(response.data.user))
    } catch(e: any) {
        console.log(e.response.data.message)
    }


}

export function* registrationWatcher() {
    yield takeLatest(RegistrationActions.ASYNC_REGISTRATION, registrationWorker)
}
