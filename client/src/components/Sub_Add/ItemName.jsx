import React, { useState } from 'react';
import axios from 'axios';

export default function ItemNumber () {
  const [itemName, setItemName] = useState();

  const handleIdSubmit = () => {
    axios.get(`api/items/${itemName}/Name`)
    .then(res => {
      console.log(res)
    })
    .catch(res => {
      console.log('doesnt exist');
    })
  }

  return (
    <div className='itemName'>
      <input
        type='search'
        placeholder='Item Name'
        className='numberInput'
        onChange={e => setItemName(e.target.value)}
      />
      <button
        type='button'
        className='itemNameVerify'
        onClick={handleIdSubmit}
      >
        Verify
      </button>
    </div>
  )
}