import React, { useState } from 'react';
import axios from 'axios';

export default function ItemNumber ({setItemNumber}) {
  const [idInput, setIdInput] = useState();
  const handleIdSubmit = () => {
    axios.get(`api/items/${idInput}/Id`)
    .then(res => {
      console.log('already exists');
      setItemNumber(undefined);
    })
    .catch(res => {
      // future enhancement : modal to show that it is valid id
      setItemNumber(idInput);
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