import React from 'react';

export default function Part ({setPart}) {

  return (
    <div className='part'>
      <select onChange={(e) => {setPart(e.target.value)}}>
        <option value=''selected disabled hidden>choose a part</option>
        <option value='weapon'>weapon</option>
        <option value='armor'>armor</option>
        <option value='accessary'>accessary</option>
        <option value='shield'>shield</option>
      </select>
    </div>
  )
}