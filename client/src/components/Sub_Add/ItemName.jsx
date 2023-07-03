import React, { useState } from 'react';
import axios from 'axios';

export default function ItemNumber ({setItemName}) {
  const [itemInput, setItemInput] = useState();

  const handleVerification = () => {
    axios.get(`/api/items/verify/name?name=${itemInput}`)
    .then(res => {
      if (res.data.item_name) {
        alert('this item name already exists in the db');
      } else {
        alert('this item name is not in the db and good to use');
        setItemName(itemInput);
      }
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