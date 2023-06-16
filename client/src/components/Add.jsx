import React , { useState } from 'react';
import stats from './validStats.js';
import ItemNumber from './Sub_Add/ItemNumber.jsx';
import ItemName from './Sub_Add/ItemName.jsx';
import Part from './Sub_Add/Part.jsx';
import Type from './Sub_Add/Type.jsx';
import Grade from './Sub_Add/Grade.jsx';
import Level from './Sub_Add/Level.jsx';

export default function Add () {
  const [part, setPart] = useState();
  const [type, setType] = useState();
  console.log(part);
  return (
    <div className='Add'>
      <ItemNumber />
      <ItemName />
      <Part setPart={setPart} />
      <Type part={part} setType={setType} />
      <Grade />
      <Level />
    </div>
  )
}