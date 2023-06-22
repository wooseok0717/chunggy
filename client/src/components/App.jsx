import React, {useState} from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';
import Authorize from './Authorize.jsx';

export default function App () {

  const [currentUser, SetCurrentUser] = useState(localStorage.email);

  return (
    <>
      <Authorize currentUser={currentUser} SetCurrentUser={SetCurrentUser} />
      <Header/>
      {/* <Search/> */}
      <Add />
    </>
  )
}