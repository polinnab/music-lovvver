import { IUser } from '../../models/IUser';
import { getUniqueData } from '../../shared/utils';
import { UsersAction, UsersActionTypes, UsersStateType } from '../../models/redux/Users';

const initialState: UsersStateType = {
    users: [] as IUser[]
}

export const usersReducer = (state = initialState, action: UsersAction): UsersStateType => {
    const { type, payload } = action;

    switch(type) {
        case UsersActionTypes.GET_USERS:
            return {
                ...state, 
                users: [...state.users, ...getUniqueData(payload, state.users, 'id')]}

        default:
            return state
    }
}
