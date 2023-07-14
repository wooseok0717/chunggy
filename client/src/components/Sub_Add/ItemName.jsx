import React, { useState } from 'react';
import axios from 'axios';

export default function ItemNumber ({setItemName, itemName, checkmark, xmark}) {
  const [itemInput, setItemInput] = useState();
  const [notValid, setNotValid] = useState(false);

  const handleVerification = () => {
    axios.get(`/api/items/verify/name?name=${itemInput}`)
    .then(res => {
      if (res.data.item_name) {
        alert('this item name already exists in the db');
        setNotValid(true);
      } else {
        alert('this item name is not in the db and good to use');
        setItemName(itemInput);
        setNotValid(false);
      }
    })
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
      {itemName && (<img className='mark' src={checkmark}/>)}
      {notValid && (<img className='mark' src={xmark} />)}
    </div>
  )
}