import React, {useEffect} from 'react';
import LoginForm from './components/LoginFrom';
import {IUser} from './models/IUser';
import { useDispatch } from 'react-redux'
import { useTypedSelector } from './hooks';
import { fetchUsersAction } from './redux/actions/users';
import { asyncCheckAuthAction, asyncLogoutAction } from './redux/actions/login';

function App() {
  const dispatch = useDispatch();
  const { isAuth, user } = useTypedSelector((state) => state.login);
  const users = useTypedSelector((state) => state.users.users);
  const { isLoadingAuth } = useTypedSelector((state) => state.loading);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(asyncCheckAuthAction())
    }
  }, []);

  if(isLoadingAuth) {
    return (
      <div>Loading...</div>
    )
  }

  if (!isAuth) {
    return (
      <>
      <LoginForm/>
      <button onClick={() => dispatch(fetchUsersAction())}>Get Users</button>
      </>
    )
  }

  return (
    <div>
      <h1>{isAuth ? `Welcome, ${user.email}!` : 'Log in, please'}</h1>
      <button onClick={() => dispatch(asyncLogoutAction())}>Log out</button>
      <div>
        <button onClick={() => dispatch(fetchUsersAction())}>Get Users</button>
      </div>
      {users.map((user: IUser) => (
        <div key={user.email}>{user.email}</div>
      ))}
    </div>
  );
}

export default App;
