import React, {useEffect} from 'react';
import LoginForm from './components/LoginFrom';
import {IUser} from './models/IUser';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { fetchUsers } from './redux/thunk/users';
import { checkAuthThunk, logoutThunk } from './redux/thunk/login';

function App() {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state: RootStateOrAny) => state.login);
  const users = useSelector((state: RootStateOrAny) => state.users.users);
  const { isLoadingAuth } = useSelector((state: RootStateOrAny) => state.loading);

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
