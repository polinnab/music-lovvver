import { IUser } from '../../models/IUser';
import { LoginActions } from '../actions/login';

const initialState = {
    user: {} as IUser,
    isAuth: false,
    isLoading: false
}

export const loginReducer = (state = initialState, action: any) => {
    const { type, payload } = action;

    switch(type) {
        case LoginActions.LOGIN:
            return {...state, isAuth: true, user: payload}
          
        case LoginActions.LOGOUT:
            return {...state, isAuth: false, user: {}}
        
        case LoginActions.CHECK_AUTH:
            return {...state, isAuth: true, user: action.payload}

        default:
            return state
    }
}