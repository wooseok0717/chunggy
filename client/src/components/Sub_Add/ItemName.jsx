import React, { useState } from 'react';
import axios from 'axios';

export default function ItemNumber ({setItemName}) {
  const [itemInput, setItemInput] = useState();

  const handleIdSubmit = () => {
    axios.get(`api/items/${itemInput}/Name`)
    .then(res => {
      console.log(res)
    })
    .catch(res => {
      setItemName(itemInput);
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
        onClick={handleIdSubmit}
      >
        Verify
      </button>
    </div>
  )
}