import React, {FC, useState, useContext} from 'react';
// import { Context } from '..';
import {observer} from 'mobx-react-lite'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../redux/actions/login';
import { registrationAction } from '../redux/actions/registration';

const LoginForm: FC = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    // const {store} = useContext(Context)

    return (
        <div>
            <input
                type="text"
                value={email}
                placeholder='Email'
                onChange={e => setEmail(e.target.value)} />
            <input
                type="password"
                value={password}
                placeholder='Password'
                onChange={e => setPassword(e.target.value)} />
                <button onClick={() => dispatch(loginAction({email, password}))}>Log in</button>
                <button onClick={() => dispatch(registrationAction({email, password}))}>Registration</button>
        </div>
    )
}

export default observer(LoginForm);