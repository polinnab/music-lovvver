import { IUser } from '../../models/IUser';
import { RegistrationAction, RegistrationActionTypes } from '../../models/redux-types/actions';
import { RegistrationState } from '../../models/redux-types/states';

const initialState: RegistrationState = {
    user: {} as IUser
}

export const registrationReducer = (state = initialState, action: RegistrationAction): RegistrationState => {
    const { type, payload } = action;

    switch(type) {
        case RegistrationActionTypes.REGISTRATION:
            return {...state, user: payload}

        default:
            return state
    }
}