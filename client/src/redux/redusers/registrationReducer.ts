import { IUser } from '../../models/IUser';
import { RegistrationAction, RegistrationActions, RegistrationStateType } from '../../models/redux/Registration';

const initialState: RegistrationStateType = {
    user: {} as IUser
}

export const registrationReducer = (state = initialState, action: RegistrationAction): RegistrationStateType => {
    const { type, payload } = action;

    switch(type) {
        case RegistrationActions.REGISTRATION:
            return {...state, user: payload}

        default:
            return state
    }
}