import { getUsersAction } from "../actions/users";
import UserService from "../../services/UserService";
import { Dispatch } from "react";
import { UsersAction } from "../../models/redux/Users";

export const fetchUsers = () => {
    return async function(dispatch: Dispatch<UsersAction>) {
        try {
            const response = await UserService.fetchUsers()
            dispatch(getUsersAction(response.data))
        } catch(e) {
            console.log(e)
        }
    }
}