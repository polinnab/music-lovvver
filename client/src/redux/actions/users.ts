import { IUser } from "../../models/IUser"
import { UsersAction, UsersActionTypes } from "../../models/redux/Users";


export const getUsersAction = (payload: IUser[]): UsersAction => {
    return { type: UsersActionTypes.GET_USERS, payload }
}
