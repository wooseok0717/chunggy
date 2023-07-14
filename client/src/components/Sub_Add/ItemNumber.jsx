import React, { useState } from 'react';
import axios from 'axios';

export default function ItemNumber ({itemNumber, setItemNumber, checkmark, xmark}) {
  const [idInput, setIdInput] = useState();
  const [notValid, setNotValid] = useState(false);

  const handleVerification = () => {
    if (!/[^0-9]/.test(idInput)) {
      axios.get(`/api/items/verify/number?number=${idInput}`)
      .then(res => {
        if (res.data.item_name) {
          alert('this item number already exists in the db');
          setNotValid(true);
        } else {
          alert('this item number is not in the db and good to use');
          setNotValid(false);
          setItemNumber(idInput);
        }
      })
    } else {
      alert('you can only have numbers');
    }
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
      {itemNumber && (<img className='mark' src={checkmark}/>)}
      {notValid && (<img className='mark' src={xmark} />)}
    </div>
  )
}