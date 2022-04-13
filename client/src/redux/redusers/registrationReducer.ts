import { IUser } from '../../models/IUser';
import { RegistrationActions } from '../actions/registration';

const initialState = {
    user: {} as IUser,
    isAuth: false,
    isLoading: false
}

export const registrationReducer = (state = initialState, action: any) => {
    const { type, payload } = action;

    switch(type) {
        case RegistrationActions.REGISTRATION:
            return {...state, isAuth: true, user: action.payload}

        default:
            return state
    }
}