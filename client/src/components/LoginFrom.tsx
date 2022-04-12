import React, {FC, useState, useContext} from 'react';
import { Context } from '..';
import {observer} from 'mobx-react-lite'

const LoginForm: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const {store} = useContext(Context)

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
                <button onClick={() => store.login(email, password)}>Log in</button>
                <button onClick={() => store.registration(email, password)}>Registration</button>
        </div>
    )
}

export default observer(LoginForm);