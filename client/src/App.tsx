import React, {useEffect} from 'react';
import LoginForm from './components/LoginFrom';
import {IUser} from './models/IUser';
import { useDispatch } from 'react-redux'
import { fetchUsers } from './redux/thunk/users';
import { checkAuthThunk, logoutThunk } from './redux/thunk/login';
import { useTypedSelector } from './hooks';

function App() {
  const dispatch = useDispatch();
  const { isAuth, user } = useTypedSelector((state) => state.login);
  const users = useTypedSelector((state) => state.users.users);
  const { isLoadingAuth } = useTypedSelector((state) => state.loading);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuthThunk())
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
      <button onClick={() => dispatch(fetchUsers())}>Get Users</button>
      </>
    )
  }

  return (
    <div>
      <h1>{isAuth ? `Welcome, ${user.email}!` : 'Log in, please'}</h1>
      <button onClick={() => dispatch(logoutThunk())}>Log out</button>
      <div>
        <button onClick={() => dispatch(fetchUsers())}>Get Users</button>
      </div>
      {users.map((user: IUser) => (
        <div key={user.email}>{user.email}</div>
      ))}
    </div>
  );
}

export default App;
