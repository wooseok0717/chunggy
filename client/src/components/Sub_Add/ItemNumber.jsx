import React, { useState } from 'react';
import axios from 'axios';

export default function ItemNumber ({setItemNumber}) {
  const [idInput, setIdInput] = useState();

  const handleVerification = () => {
    axios.get('/api/items/verify/number', {params: {number: idInput}})
    .then(res => {
      console.log('number verified',res);
    })
    .catch(res => {
      console.log('number not verified',res);
    })
  }
  return (
    <div className='itemNumber'>
      <input
        type='search'
        placeholder='Item Number'
        className='numberInput'
        onChange={e => setIdInput(e.target.value)}
      />
      <button
        type='button'
        className='itemNumberVerify'
        onClick={handleVerification}
      >
        Verify
      </button>
    </div>
  )
}