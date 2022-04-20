import { IUser } from "../../models/IUser"
import { FetchUsersAction, SetErrorAction, UsersAction, UsersActions } from "../../models/redux/Users";


export const getUsersAction = (payload: IUser[]): UsersAction => {
    return { type: UsersActions.GET_USERS, payload }
}

export const fetchUsersAction = (): FetchUsersAction => {
    return { type: UsersActions.FETCH_USERS }
}
 
export const setUsersErrorAction = (payload: string): SetErrorAction => {
    return { type: UsersActions.SET_ERROR, payload }
}
