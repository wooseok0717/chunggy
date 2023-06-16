import React, { useState } from 'react';
import axios from 'axios';

export default function ItemNumber () {
  const [idInput, setIdInput] = useState();
  const handleIdSubmit = () => {
    axios.get(`api/items/${idInput}/Id`)
    .then(res => {
      console.log(res)
    })
    .catch(res => {
      console.log('doesnt exist');
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
        onClick={handleIdSubmit}
      >
        Verify
      </button>
    </div>
  )
}