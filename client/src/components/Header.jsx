import React from 'react';
import NavBar from './NavBar.jsx';

export default function Header ({setCurrentPage}) {

  return (
    <div className='header'>
      <div className='logo'>
        <img
          height='300px'
          src='https://res.cloudinary.com/dfxarumgq/image/upload/v1681022116/Screenshot_2023-04-08_at_11.31-PhotoRoom_bpwovx.png'
          alt="Logo"
          onClick={()=>{console.log('hello')}}
        />
      </div>
      <NavBar setCurrentPage={setCurrentPage} />
    </div>
  )
}