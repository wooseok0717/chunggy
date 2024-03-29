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
import discord from '../../assets/discord.png'
import ManageUser from './Sub_User/ManageUser.jsx';

export default function App () {

  const [currentUser, SetCurrentUser] = useState(localStorage.email);
  const [userData, setUserData] = useState({});
  const [fillOut, setFillOut] = useState(false);
  const [currentPage, setCurrentPage] = useState('database');
  const [currentItem, setCurrentItem] = useState();

  useEffect(() => {
    if (currentItem) {
      setCurrentPage('itemdetails');
    }
  },[currentItem])

  const getUser = (email) => {
    axios.get(`/api/user?email=${email}`)
    .then((data) => {
      if (typeof data.data === 'object') {
        setUserData(data.data)
      } else {
        setUserData({});
      }
    })
    .catch(() => console.log('failed'))
  }

  useEffect(() => {
    if (localStorage.email !== undefined) {
      if (userData === undefined) {
        getUser(localStorage.email);
      }
    }
  },[]);

  useEffect(() => {
    if (localStorage.email !== undefined) {
      if (userData.name === undefined) {
        setFillOut(true);
      } else {
        setFillOut(false);
      }
    }
  },[userData]);

  useEffect(() => {
    if (!fillOut) {
      getUser(localStorage.email);
    }
  },[fillOut])

  return (
    <>
      <div className='app-content'>
        {fillOut && (<UserInfo currentUser={currentUser} setFillOut={setFillOut} getUser={getUser}/>)}
        <Authorize userData={userData} currentUser={currentUser} SetCurrentUser={SetCurrentUser} getUser={getUser} setCurrentPage={setCurrentPage}/>
        <Header setCurrentPage={setCurrentPage} />
        <div className='content'>
          {currentPage === 'home' ? (<Home />):
          currentPage === 'database' ? (<Database userData={userData} currentUser={currentUser} setCurrentItem={setCurrentItem}/>) : currentPage === 'itemdetails' ? (<ItemDetails item={currentItem}/>)
          : currentPage === 'translator' ? (<Translator />)
          : currentPage === 'manageuser' ? (<ManageUser userData={userData}/>)
          : (<></>)
          }
        </div>
      </div>
      <footer className="footer">
        Join our community<a href="https://discord.gg/UV6c63ea" target="_blank"><img src={discord}/></a>
      </footer>
    </>
  )
}