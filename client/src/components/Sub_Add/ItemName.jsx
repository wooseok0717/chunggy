import React, { useState } from 'react';
import axios from 'axios';

export default function ItemNumber ({setItemName}) {
  const [itemInput, setItemInput] = useState();

  const handleVerification = () => {
    axios.get('/api/items/verify/name', {params: {name: itemInput}})
    .then(res => {
      console.log('name verified',res);
    })
    .catch(res => {
      console.log('name not verified',res);
    })
  }

  return (
    <div className='itemName'>
      <input
        type='search'
        placeholder='Item Name'
        className='nameInput'
        onChange={e => setItemInput(e.target.value)}
      />
      <button
        type='button'
        className='itemNameVerify'
        onClick={handleVerification}
      >
        Verify
      </button>
    </div>
  )
}