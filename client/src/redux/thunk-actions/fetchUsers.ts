import axios from "axios";
import { API_URL } from "../../http";
import { getUsersAction } from "../actions/users";
import $api from "../../http";
import { IUser } from "../../models/IUser";
import UserService from "../../services/UserService";

export const fetchUsers = () => {
    return async function(dispatch: any) {
        try {
            const response = await UserService.fetchUsers()
            dispatch(getUsersAction(response.data))
        } catch(e) {
            console.log(e)
        }
    }
}