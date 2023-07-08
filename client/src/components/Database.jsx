import React, {useState} from 'react';
import axios from 'axios';

export default function Database () {

  const [part, setPart] = useState();
  const [type, setType] = useState();
  const [grade, setGrade] = useState({common: true, superior: true, heroic: true, fabled: true, eternal: true})

  const validTypes = {
    weapon : ['bow', 'chainsword', 'dagger', 'greatsword', 'mace', 'orb', 'polearm', 'spellbook', 'staff', 'sword'],
    armor : ['top', 'bottom', 'shoulder', 'gloves', 'shoes'],
    accessary : ['belt', 'earing', 'headgear', 'necklace', 'ring', 'wings'],
    shield : ['shield']
  }

  const handleGrade = (g) => {
    let temp = grade;
    temp[g] = !temp[g]
    setGrade(temp);
  }

  const handleSearch = e => {
    if (part === undefined) {
      alert('please select part');
    } else if (type === undefined) {
      alert('please select type');
    } else {
      const data = {
        part, type, grade, input: e.target.value
      }
      axios.get('/api/items', {params: data});
    }
  }

  return (
    <div>
      Part:
      <select onChange={e => setPart(e.target.value)}>
        <option value=''selected disabled hidden>choose part</option>
        <option value='weapon'>Weapon</option>
        <option value='armor'>Armor</option>
        <option value='accessary'>Accessary</option>
        <option value='shield'>Shield</option>
      </select>
      {part ? (
      <>
      Type:
      <select onChange={e => {setType(e.target.value)}}>
        <option value=''selected disabled hidden>choose type</option>
        {validTypes[part].map((x) => {
          return (
            <option value={x}>{x}</option>
          )
        })}
      </select>
      </>) : (<></>)}
      Grade:
      <input type='checkbox' onChange={() => handleGrade('common')} defaultChecked/><span>common</span>
      <input type='checkbox' onChange={() => handleGrade('superior')} defaultChecked/><span>superior</span>
      <input type='checkbox' onChange={() => handleGrade('heroic')} defaultChecked/><span>heroic</span>
      <input type='checkbox' onChange={() => handleGrade('fabled')} defaultChecked/><span>fabled</span>
      <input type='checkbox' onChange={() => handleGrade('eternal')} defaultChecked/><span>eternal</span>
      <div>
        Search:
        <input onChange={handleSearch}/>
      </div>
      <button onClick={() => console.log(part, type, grade)}>Check states</button>
    </div>
  )
}