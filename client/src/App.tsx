import React, {useContext, useEffect, useState} from 'react';
import { Context } from '.';
import LoginForm from './components/LoginFrom';
import {observer} from "mobx-react-lite"
import UserService from './services/UserService';
import {IUser} from './models/IUser';

function App() {
  const {store} = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, []);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data)
    } catch(e) {
      console.log(e)
    }
  }

  if(store.isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  if (!store.isAuth) {
    return (
      <>
      <LoginForm/>
      <button onClick={getUsers}>Get Users</button>
      </>
    )
  }

  return (
    <div>
      <h1>{store.isAuth ? `Welcome, ${store.user.email}!` : 'Log in, please'}</h1>
      <button onClick={() => store.logout()}>Log out</button>
      <div>
        <button onClick={getUsers}>Get Users</button>
      </div>
      {users.map(user => (
        <div key={user.email}>{user.email}</div>
      ))}
    </div>
  );
}

export default observer(App);
