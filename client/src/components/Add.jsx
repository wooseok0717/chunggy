import React , { useState, useEffect } from 'react';
import axios from 'axios';
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
import Korean from './Sub_Add/Korean.jsx';

export default function Add ({currentUser, setAddItem}) {
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
  const [abyss, setAbyss] = useState({});
  const [korean, setKorean] = useState();

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
      maxEnchant, setItem, currentUser, abyss, korean
    }
    console.log(config);
    axios.post('/api/items', config)
    .then(setAddItem(false));
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className="modal-header">
          <h4 className='modal-title'>Create new item</h4>
        </div>
        <div className='modal-body'>
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
            <Abyss abyss={abyss} setAbyss={setAbyss} />
            <Conditioning
              part={part}
              type={type}
              conditionOne={conditionOne}
              conditionTwo={conditionTwo}
              setConditionOne={setConditionOne}
              setConditionTwo={setConditionTwo}
            />
            <Korean setKorean={setKorean}/>

          </div>
        </div>
        <div className='modal-footer'>
          <button onClick={handleSubmit}>Add</button>
          <button onClick={() => setAddItem(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}