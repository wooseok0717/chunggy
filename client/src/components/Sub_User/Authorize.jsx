import React, {useState} from 'react';
import SignIn from './SignIn.jsx';
import SignOut from './SignOut.jsx';

export default function Authorize({userData, currentUser, SetCurrentUser, getUser}) {


  return (
    <div className='login'>
      {currentUser ?
      (
        <>
          <SignOut SetCurrentUser={SetCurrentUser}/>
          Welcome, {userData.name ? userData.name.charAt(0).toUpperCase() + userData.name.slice(1) : null}
        </>
      )
      : (
        <>
          <SignIn SetCurrentUser={SetCurrentUser} getUser={getUser}/>
          Log In
        </>
      )}
    </div>
  )
}