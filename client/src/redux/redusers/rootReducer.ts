import {combineReducers} from 'redux'
import { loadingReducer } from './loading';
import { loginReducer } from './loginReducer';
import { registrationReducer } from './registrationReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
    login: loginReducer, 
    registration: registrationReducer,
    users: usersReducer,
    loading: loadingReducer
})