import React from 'react';
import LineOneStats from './LineOneStats.jsx';
import LineTwoStats from './LineTwoStats.jsx';

export default function Stats ({part, type, lineOne, lineTwo, setLineOne, setLineTwo}) {

  if (type === undefined) {
    return (
      <div className='stats'>please select part and type to add stats</div>
    )
  }
  return (
    <div className='stats'>
      <LineOneStats type={type} part={part} lineOne={lineOne} setLineOne={setLineOne}/>
      <LineTwoStats type={type} part={part} lineTwo={lineTwo} setLineTwo={setLineTwo}/>
    </div>
  )
}