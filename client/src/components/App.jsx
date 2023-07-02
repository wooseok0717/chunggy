import React, {useState, useEffect} from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';
import Authorize from './Sub_User/Authorize.jsx';
import UserInfo from './Sub_User/UserInfo.jsx';
import axios from 'axios';

export default function App () {

  const [currentUser, SetCurrentUser] = useState(localStorage.email);
  const [userData, setUserData] = useState();
  const [fillOut, setFillOut] = useState(false);

  const getUser = (email) => {
    axios.get(`/api/user?email=${email}`)
    .then((data) => {
      setUserData(data.data)
    })
    .catch(() => console.log('failed'))
  }

  useEffect(() => {
    if (localStorage.email !== undefined) {
      if (userData === '') {
        setFillOut(true);
      }
    }
  },[userData, currentUser]);

  useEffect(() => {
    if (!fillOut) {
      getUser(localStorage.email);
    }
  },[fillOut])

  useEffect(() => {
    if (localStorage.email !== undefined) {
      if (userData === undefined) {
        getUser(localStorage.email);
      }
    }
  },[]);

  return (
    <>
      {fillOut && (<UserInfo currentUser={currentUser} setFillOut={setFillOut} SetCurrentUser={SetCurrentUser}/>)}
      <Authorize currentUser={currentUser} SetCurrentUser={SetCurrentUser} getUser={getUser}/>
      <Header/>
      <button onClick={()=>console.log(userData)}>click</button>
      <Add currentUser={currentUser} />
    </>
  )
}