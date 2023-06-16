import React from 'react';

export default function ItemNumber () {

  return (
    <div className='itemNumber'>
      <input
        type='search'
        placeholder='Item Number'
        className='numberInput'
      />
      <button
        type='button'
        className='itemNumberVerify'
      >
        Verify
      </button>
    </div>
  )
}