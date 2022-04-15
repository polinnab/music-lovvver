import { IUser } from '../../models/IUser';
import { LoginState } from '../../models/redux-types/states';
import { LoginActionGeneral, LoginActionTypes } from '../../models/redux-types/actions';

const initialState: LoginState = {
    user: {} as IUser,
    isAuth: false
}

export const loginReducer = (state = initialState, action: LoginActionGeneral): LoginState => {

    switch(action.type) {
        case LoginActionTypes.LOGIN:
            return {...state, isAuth: true, user: action.payload}
          
        case LoginActionTypes.LOGOUT:
            return {...state, isAuth: false, user: {} as IUser}
        
        case LoginActionTypes.CHECK_AUTH:
            return {...state, isAuth: true, user: action.payload}

        default:
            return state
    }
}
