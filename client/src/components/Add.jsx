import React , { useState, useEffect } from 'react';
import axios from 'axios';
import stats from './validStats.js';
import ItemNumber from './Sub_Add/ItemNumber.jsx';
import ItemName from './Sub_Add/ItemName.jsx';
import Part from './Sub_Add/Part.jsx';
import Type from './Sub_Add/Type.jsx';
import Grade from './Sub_Add/Grade.jsx';
import Level from './Sub_Add/Level.jsx';
import Stats from './Sub_Add/Stats.jsx';

export default function Add () {
  const [itemNumber, setItemNumber] = useState();
  const [itemName, setItemName] = useState();
  const [part, setPart] = useState();
  const [type, setType] = useState();
  const [material, setMaterial] = useState();
  const [grade, setGrade] = useState();
  const [level, setLevel] = useState();


  useEffect(() => {
    if (part !== 'armor') {
      setMaterial(undefined);
    }
  },[part]);
  useEffect(() => {
    setType(undefined);
  },[part])
  const handleSubmit = () => {
    axios.post('/api/items', {
      itemNumber, itemName, part, type, grade, level
    })
  }

  return (
    <div className='Add'>
      <ItemNumber setItemNumber={setItemNumber} />
      <ItemName setItemName={setItemName}/>
      <Part setPart={setPart} />
      <Type part={part} setType={setType} setMaterial={setMaterial} />
      <Grade setGrade={setGrade}/>
      <Level setLevel={setLevel}/>
      <Stats part={part} type={type} />
      <button onClick={handleSubmit}>Add</button>
      <button>Cancel</button>
    </div>
  )
}