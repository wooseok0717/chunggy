import React from 'react';
import LineOneStats from './LineOneStats.jsx';
import LineTwoStats from './LineTwoStats.jsx';

export default function Stats ({part, type}) {

  if (type === undefined) {
    return (
      <div className='stats'>please select part and type to add stats</div>
    )
  }
  return (
    <div className='stats'>
      <LineOneStats type={type} part={part}/>
      <LineTwoStats />
    </div>
  )
}