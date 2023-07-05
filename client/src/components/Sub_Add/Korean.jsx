import React from 'react';

export default function Korean ({setKorean}) {

  return (

    <div className='korean'>
      <input
        type='text'
        placeholder='korean name'
        onChange={e => setKorean(e.target.value)}
      />
    </div>
  )
}