import React, {useEffect, useState} from 'react';
import {auth, provider} from './googleSignin/config.js'
import {signInWithPopup} from 'firebase/auth';

export default function SignIn({SetCurrentUser}) {

  const [value, setValue] = useState('');
  const handleClick = function () {

    signInWithPopup(auth, provider)
    .then(data => {
      localStorage.setItem('email', data.user.email);
      SetCurrentUser(data.user.email);
    })
  }

  return (<button onClick={handleClick}> Sign In with google</button>)
}