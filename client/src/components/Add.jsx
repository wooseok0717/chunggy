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
import checkmark from '../../assets/checkmark.png'
import xmark from '../../assets/xmark.png'

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
  const [rerender, setRerender] =useState(0);

  useEffect(() => {
    if (part !== 'armor') {
      setMaterial(undefined);
    }
  },[part]);

  useEffect(() => {
    setLineOne({});
    setLineTwo({});
    setConditionOne({});
    setConditionTwo({});
    setManastone({});
    setAbyss({});
    setRerender(rerender + 1);
  },[part, type])

  useEffect(() => {
    setType(undefined);
  },[part]);

  const handleSubmit = () => {
    if (itemNumber === undefined) {
      alert('Please verify item number.');
    } else if (itemName === undefined) {
      alert('Please verify item name.');
    } else if (part === undefined) {
      alert('Please select a part.');
    } else if (type === undefined) {
      alert('Please select a type.');
    } else if (part === 'armor' && material === undefined) {
      alert('Please select a material.');
    } else if (grade === undefined) {
      alert('Please select a grade.');
    } else {
      const config = {
        itemNumber, itemName, part, type, material, grade, level,
        lineOne, lineTwo, conditionOne, conditionTwo, manastone,
        maxEnchant, setItem, currentUser, abyss, korean
      }
      console.log(config);
      // axios.post('/api/items', config)
      // .then(setAddItem(false));
    }
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className="modal-header">
          <h4 className='modal-title'>Create new item</h4>
        </div>
        <div className='modal-body'>
          <div className='add'>
            <ItemNumber setItemNumber={setItemNumber} itemNumber={itemNumber} checkmark={checkmark} xmark={xmark}/>
            <ItemName setItemName={setItemName} itemName={itemName} checkmark={checkmark} xmark={xmark}/>
            <Part setPart={setPart} />
            <Type part={part} type={type} setType={setType} setMaterial={setMaterial} />
            <Grade setGrade={setGrade}/>
            <Level setLevel={setLevel}/>
            <Stats
              part={part}
              type={type}
              lineOne={lineOne}
              setLineOne={setLineOne}
              lineTwo={lineTwo}
              setLineTwo={setLineTwo}
              rerender={rerender}
            />
            <Manastone setManastone={setManastone} manastone={manastone} rerender={rerender}/>
            <Enchant setMaxEnchant={setMaxEnchant} rerender={rerender}/>
            <SetItem setSetItem={setSetItem} rerender={rerender}/>
            <Abyss abyss={abyss} setAbyss={setAbyss} rerender={rerender}/>
            <Conditioning
              part={part}
              type={type}
              conditionOne={conditionOne}
              conditionTwo={conditionTwo}
              setConditionOne={setConditionOne}
              setConditionTwo={setConditionTwo}
              rerender={rerender}
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