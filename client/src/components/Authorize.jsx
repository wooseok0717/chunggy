import React, {useState} from 'react';
import SignIn from './SignIn.jsx';
import SignOut from './SignOut.jsx';

export default function Authorize({currentUser, SetCurrentUser}) {

  return (
    <div>
      {currentUser ? (<SignOut SetCurrentUser={SetCurrentUser}/>) : (<SignIn SetCurrentUser={SetCurrentUser}/>)}
    </div>
  )
}