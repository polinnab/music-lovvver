import { IUser } from '../../models/IUser';
import { LoginActionGeneral, LoginActionTypes, LoginStateType } from '../../models/redux/Login';

const initialState: LoginStateType = {
    user: {} as IUser,
    isAuth: false
}

export const loginReducer = (state = initialState, action: LoginActionGeneral): LoginStateType => {

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
