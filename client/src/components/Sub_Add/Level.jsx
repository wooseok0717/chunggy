import React from 'react';

export default function Level ({setLevel}) {

  const handleLevelChange = e => {
    if (e.target.value > 55) {
      alert('too big');
    } else if (e.target.value < 0) {
      alert('too small');
    } else {
      setLevel(e.target.value)
    }
  }
  return (

    <div className='level'>
      <input
        type='text'
        className='level'
        placeholder='Level 1~55'
        onChange={handleLevelChange}
      />
    </div>
  )
}