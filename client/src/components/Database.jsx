import React, {useState ,useEffect} from 'react';
import axios from 'axios';
import ItemList from './Sub_Database/ItemList.jsx'
import Add from './Add.jsx'

export default function Database ({currentUser, setCurrentItem, userData}) {

  const [part, setPart] = useState();
  const [type, setType] = useState();
  const [common, setCommon] = useState(true);
  const [superior, setSuperior] = useState(true);
  const [heroic, setHeroic] = useState(true);
  const [fabled, setFabled] = useState(true);
  const [eternal, setEternal] = useState(true);
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

  useEffect(() => {
    if (part !== 'armor' && type !== 'headgear') {
      setMaterial();
    }
    if (part !== undefined && type !== undefined) {
      handleSearch();
    }
  },[part,type,input,currentFilter,material,common,superior,heroic,fabled,eternal])

  const handleSearch = () => {
    let grades = [];
    if (common) {
      grades.push('common')
    }
    if (superior) {
      grades.push('superior')
    }
    if (heroic) {
      grades.push('heroic')
    }
    if (fabled) {
      grades.push('fabled')
    }
    if (eternal) {
      grades.push('eternal')
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
        <button onClick={() => {
          if (userData.role === 'owner') {
            setAddItem(true)
          } else if (userData.role === 'manager') {
            alert('please becareful when adding new item');
            setAddItem(true);
          } else {
            alert('you dont have permission to add items to the database');
          }
        }}>Add a new item</button>
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
      <input type='checkbox' onChange={() => setCommon(!common)} defaultChecked/><span>common</span>
      <input type='checkbox' onChange={() => setSuperior(!superior)} defaultChecked/><span>superior</span>
      <input type='checkbox' onChange={() => setHeroic(!heroic)} defaultChecked/><span>heroic</span>
      <input type='checkbox' onChange={() => setFabled(!fabled)} defaultChecked/><span>fabled</span>
      <input type='checkbox' onChange={() => setEternal(!eternal)} defaultChecked/><span>eternal</span>
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