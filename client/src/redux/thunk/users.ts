import { getUsersAction } from "../actions/users";
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