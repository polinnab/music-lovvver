import { IUser } from '../../models/IUser';
import { getUniqueData } from '../../shared/utils';
import { UsersState } from '../../models/redux-types/states';
import { UsersAction, UsersActionTypes } from '../../models/redux-types/actions';

const initialState: UsersState = {
    users: [] as IUser[]
}

export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
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
