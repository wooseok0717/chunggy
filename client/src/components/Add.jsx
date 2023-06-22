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
import Manastone from './Sub_Add/Manastone.jsx';
import Enchant from './Sub_Add/Enchant.jsx';
import SetItem from './Sub_Add/SetItem.jsx';
import Abyss from './Sub_Add/Abyss.jsx';
import Conditioning from './Sub_Add/Conditioning.jsx';

export default function Add ({currentUser}) {
  const [itemNumber, setItemNumber] = useState();
  const [itemName, setItemName] = useState();
  const [part, setPart] = useState();
  const [type, setType] = useState();
  const [material, setMaterial] = useState();
  const [grade, setGrade] = useState();
  const [level, setLevel] = useState();
  const [lineOne, setLineOne] = useState({});
  const [lineTwo, setLineTwo] = useState({});
  const [conditionOne, setConditionOne] = useState({});
  const [conditionTwo, setConditionTwo] = useState({});
  const [manastone, setManastone] = useState({});
  const [maxEnchant, setMaxEnchant] = useState();
  const [setItem, setSetItem] = useState();

  useEffect(() => {
    if (part !== 'armor') {
      setMaterial(undefined);
    }
  },[part]);

  useEffect(() => {
    setType(undefined);
  },[part]);

  const handleSubmit = () => {
    const config = {
      itemNumber, itemName, part, type, material, grade, level,
      lineOne, lineTwo, conditionOne, conditionTwo, manastone,
      maxEnchant, setItem, currentUser
    }
    console.log(config);
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
      <Stats
        part={part}
        type={type}
        lineOne={lineOne}
        setLineOne={setLineOne}
        lineTwo={lineTwo}
        setLineTwo={setLineTwo}
      />
      <Manastone setManastone={setManastone} manastone={manastone} />
      <Enchant setMaxEnchant={setMaxEnchant} />
      <SetItem setSetItem={setSetItem} />
      <Abyss />
      <Conditioning
        part={part}
        type={type}
        conditionOne={conditionOne}
        conditionTwo={conditionTwo}
        setConditionOne={setConditionOne}
        setConditionTwo={setConditionTwo}
      />
      <button onClick={handleSubmit}>Add</button>
      <button>Cancel</button>
    </div>
  )
}