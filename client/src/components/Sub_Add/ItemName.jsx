import React from 'react';

export default function ItemNumber () {

  return (
    <div className='itemName'>
      <input
        type='search'
        placeholder='Item Name'
        className='numberInput'
      />
      <button
        type='button'
        className='itemNameVerify'
      >
        Verify
      </button>
    </div>
  )
}