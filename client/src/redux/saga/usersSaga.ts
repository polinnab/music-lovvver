import { put, takeEvery } from "@redux-saga/core/effects";
import UserService from "../../services/UserService";
import { getUsersAction, setUsersErrorAction } from "../actions/users"
import { IUser } from "../../models/IUser";
import { UsersActions } from "../../models/redux/Users";

interface WorkerResponse {
    data: IUser[]
}

function* fetchUsersWorker(): Generator<any, void, WorkerResponse> {
    try {
        const response = yield UserService.fetchUsers()
        yield put(getUsersAction(response.data))
    } catch(e: any) {
        console.log(e.response.data.message)
        yield put(setUsersErrorAction(e.response.data.message))
    }

}

export function* usersWatcher() {
    yield takeEvery(UsersActions.FETCH_USERS, fetchUsersWorker)
}
