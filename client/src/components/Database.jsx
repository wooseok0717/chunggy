import React, {useState ,useEffect} from 'react';
import axios from 'axios';
import ItemList from './Sub_Database/ItemList.jsx'
import Add from './Add.jsx'

export default function Database ({currentUser, setCurrentItem}) {

  const [part, setPart] = useState();
  const [type, setType] = useState();
  const [grade, setGrade] = useState({common: true, superior: true, heroic: true, fabled: true, eternal: true});
  const [input, setInput] = useState('');
  const [currentFilter, setCurrentFilter] = useState('accuracy');
  const [currentList, setCurrentList] = useState([]);
  const [addItem, setAddItem] = useState(false);
  const [material, setMaterial] = useState();

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

  useEffect(() => {
    if (part !== 'armor' && type !== 'headgear') {
      setMaterial();
    }
    if (part !== undefined && type !== undefined) {
      handleSearch();
    }
  },[part,type,grade,input,currentFilter,material])

  const handleSearch = () => {
    let grades = [];
    for (let key in grade) {
      if (grade[key]) {
        grades.push(key);
      }
    }
    const data = {
      part, type, grades, input, currentFilter, material
    }
    axios.get('/api/items', {params: data})
    .then(res => setCurrentList(res.data))
    .catch(() => {
      console.log('broke!')
    });
  }

  return (
    <div>
      <div>
        <button onClick={() => setAddItem(true)}>Add a new item</button>
      </div>
      {addItem && <Add currentUser={currentUser} setAddItem={setAddItem} />}
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
      {(part === 'armor' || type === 'headgear') && (
        <div>
          Material:
          <select onChange={e => setMaterial(e.target.value)}>
            <option value=''selected disabled hidden>choose material</option>
            <option value='chain'>chain</option>
            <option value='cloth'>cloth</option>
            <option value='leather'>leather</option>
            <option value='plate'>plate</option>
          </select>
        </div>
      )}
      </>) : (<></>)}
      Grade:
      <input type='checkbox' onChange={() => handleGrade('common')} defaultChecked/><span>common</span>
      <input type='checkbox' onChange={() => handleGrade('superior')} defaultChecked/><span>superior</span>
      <input type='checkbox' onChange={() => handleGrade('heroic')} defaultChecked/><span>heroic</span>
      <input type='checkbox' onChange={() => handleGrade('fabled')} defaultChecked/><span>fabled</span>
      <input type='checkbox' onChange={() => handleGrade('eternal')} defaultChecked/><span>eternal</span>
      <div>
        Search:
        <input onChange={e => (setInput(e.target.value.toLowerCase()))}/>
      </div>
      {!type && (<>please select type</>)}
      {!part && (<>please select part</>)}
      <button onClick={() => console.log(part, type, grade)}>Check states</button>
      <ItemList currentList={currentList} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} setCurrentItem={setCurrentItem}/>
    </div>
  )
}