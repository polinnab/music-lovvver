import { IUser } from '../../models/IUser';
import { UsersActions } from '../actions/users';

const initialState = {
    users: [] as IUser[]
}

export const usersReducer = (state = initialState, action: any) => {
    const { type, payload } = action;

    switch(type) {
        case UsersActions.GET_USERS:
            return {
                ...state, 
                users: [...state.users, ...payload]}

        default:
            return state
    }
}