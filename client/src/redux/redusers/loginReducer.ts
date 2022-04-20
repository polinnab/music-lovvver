import { IUser } from '../../models/IUser';
import { LoginActionGeneral, LoginActions, LoginStateType } from '../../models/redux/Login';

const initialState: LoginStateType = {
    user: {} as IUser,
    isAuth: false
}

export const loginReducer = (state = initialState, action: LoginActionGeneral): LoginStateType => {

    switch(action.type) {
        case LoginActions.LOGIN:
            return {...state, isAuth: true, user: action.payload}
          
        case LoginActions.LOGOUT:
            return {...state, isAuth: false, user: {} as IUser}
        
        case LoginActions.CHECK_AUTH:
            return {...state, isAuth: true, user: action.payload}

        default:
            return state
    }
}
