import React, { useState } from 'react';
import axios from 'axios';

export default function ItemNumber ({setItemName}) {
  const [itemInput, setItemInput] = useState();

  const handleVerification = () => {
    if (!/[^a-z0-9\s]/.test(itemInput)) {
      axios.get(`/api/items/verify/name?name=${itemInput}`)
      .then(res => {
        if (res.data.item_name) {
          alert('this item name already exists in the db');
        } else {
          alert('this item name is not in the db and good to use');
          setItemName(itemInput);
        }
      })
    } else {
      alert('you can not have any special characters in input');
    }
  }

  return (
    <div className='itemName'>
      <input
        type='search'
        placeholder='Item Name'
        className='nameInput'
        onChange={e => setItemInput(e.target.value.toLowerCase())}
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