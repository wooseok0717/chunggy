import React, {useState, useEffect} from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';
import Authorize from './Sub_User/Authorize.jsx';
import UserInfo from './Sub_User/UserInfo.jsx';
import Database from './Database.jsx';
import ItemDetails from './Sub_Database/ItemDetails.jsx';
import Translator from './Translator.jsx';
import Home from './Home.jsx';
import axios from 'axios';

export default function App () {

  const [currentUser, SetCurrentUser] = useState(localStorage.email);
  const [userData, setUserData] = useState();
  const [fillOut, setFillOut] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentItem, setCurrentItem] = useState();

  useEffect(() => {
    if (currentItem) {
      setCurrentPage('itemdetails');
    }
  },[currentItem])

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
  },[userData]);

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
      {fillOut && (<UserInfo currentUser={currentUser} setFillOut={setFillOut}/>)}
      <Authorize currentUser={currentUser} SetCurrentUser={SetCurrentUser} getUser={getUser}/>
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === 'home' ? (<Home />):
      currentPage === 'database' ? (<Database currentUser={currentUser} setCurrentItem={setCurrentItem}/>) : currentPage === 'itemdetails' ? (<ItemDetails item={currentItem}/>)
      : currentPage === 'translator' ? (<Translator />)
      : (<></>)
      }
    </>
  )
}