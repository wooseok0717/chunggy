import React from 'react';

export default function SignOut({SetCurrentUser}) {

  const handleClick = function() {
    localStorage.clear();
    window.location.reload();
    SetCurrentUser('');
  }

  return (
    <button onClick={handleClick}> Sign out</button>
  )
}