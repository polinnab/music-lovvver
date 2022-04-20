import React, {FC, useState} from 'react';
import { useDispatch } from 'react-redux'
import { asyncLoginAction } from '../redux/actions/login';
import { asyncRegistrationAction } from '../redux/actions/registration';

const LoginForm: FC = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                <button onClick={() => dispatch(asyncLoginAction({email, password}))}>Log in</button>
                <button onClick={() => dispatch(asyncRegistrationAction({email, password}))}>Registration</button>
        </div>
    )
}

export default LoginForm;