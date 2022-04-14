import { IUser } from '../../models/IUser';
import { RegistrationActions } from '../actions/registration';

const initialState = {
    user: {} as IUser
}

export const registrationReducer = (state = initialState, action: any) => {
    const { type, payload } = action;

    switch(type) {
        case RegistrationActions.REGISTRATION:
            return {...state, user: payload}

        default:
            return state
    }
}