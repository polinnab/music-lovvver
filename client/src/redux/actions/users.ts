import { IUser } from "../../models/IUser"
import { FetchUsersAction, UsersAction, UsersActions } from "../../models/redux/Users";


export const getUsersAction = (payload: IUser[]): UsersAction => {
    return { type: UsersActions.GET_USERS, payload }
}

export const fetchUsersAction = (): FetchUsersAction => {
    return { type: UsersActions.FETCH_USERS }
}
