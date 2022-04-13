import React, {useContext, useEffect, useState} from 'react';
// import { Context } from '.';
import LoginForm from './components/LoginFrom';
import {observer} from "mobx-react-lite"
import UserService from './services/UserService';
import {IUser} from './models/IUser';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { checkAuthAction, logoutAction } from './redux/actions/login';
import { fetchUsers } from './redux/thunk-actions/fetchUsers';

function App() {
  const dispatch = useDispatch()
  const loginState = useSelector((state: RootStateOrAny) => state.login)
  console.log('loginState: ', loginState)
  const users = useSelector((state: RootStateOrAny) => state.users)
  // const {store} = useContext(Context);
  // const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    // if (localStorage.getItem('token')) {
    //   dispatch(checkAuthAction())
    // }
  }, []);

  // async function getUsers() {
  //   try {
  //     const response = await UserService.fetchUsers();
  //     setUsers(response.data)
  //   } catch(e) {
  //     console.log(e)
  //   }
  // }

  if(loginState.isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  if (!loginState.isAuth) {
    return (
      <>
      <LoginForm/>
      <button onClick={() => dispatch(fetchUsers())}>Get Users</button>
      </>
    )
  }

  return (
    <div>
      <h1>{loginState.isAuth ? `Welcome, ${loginState.user.email}!` : 'Log in, please'}</h1>
      <button onClick={() => dispatch(logoutAction())}>Log out</button>
      <div>
        <button onClick={() => dispatch(fetchUsers())}>Get Users</button>
      </div>
      {users.map((user: IUser) => (
        <div key={user.email}>{user.email}</div>
      ))}
    </div>
  );
}

export default observer(App);
