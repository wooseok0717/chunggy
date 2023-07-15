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
    setType();
  },[part])

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
      <div className='add-button'>
        <button onClick={() => {
          if (userData.role === 'owner') {
            setAddItem(true)
          } else if (userData.role === 'manager') {
            console.log('please becareful when adding new item');
            setAddItem(true);
          } else {
            console.log('you dont have permission to add items to the database');
          }
        }}>Add a new item</button>
      </div>
      {addItem && <Add currentUser={currentUser} setAddItem={setAddItem} />}
      <div className='part selection'>
        <span className='input-label'>Part:</span>
        <select onChange={e => setPart(e.target.value)}>
          <option value=''selected disabled hidden>Select a part</option>
          <option value='weapon'>Weapon</option>
          <option value='armor'>Armor</option>
          <option value='accessary'>Accessary</option>
          <option value='shield'>Shield</option>
        </select>
        {!part && (<>please select part</>)}
      </div>
      {part ? (
      <div className='type selection'>
        <span className='input-label'>Type:</span>
        <select onChange={e => {setType(e.target.value)}}>
          <option value=''selected disabled hidden>Select a type</option>
          {validTypes[part].map((x) => {
            return (
              <option value={x} key={x}>{x[0].toUpperCase()+x.slice(1)}</option>
            )
          })}
        </select>
        {!type && (<>please select type</>)}

      </div>) : (<></>)}
      {(part === 'armor' || type === 'headgear') && (
          <div className='material selection'>
            <span className='input-label'>Material:</span>
            <select onChange={e => setMaterial(e.target.value)}>
              <option value=''selected disabled hidden>Select a material</option>
              <option value='chain'>Chain</option>
              <option value='cloth'>Cloth</option>
              <option value='leather'>Leather</option>
              <option value='plate'>Plate</option>
            </select>
            (Optional)
          </div>
        )}
      <div className='grade selection'>
        <span className='input-label'>Grade:</span>
        <input type='checkbox' onChange={() => setCommon(!common)} defaultChecked/><span className='common'>Common</span>
        <input type='checkbox' onChange={() => setSuperior(!superior)} defaultChecked/><span className='superior'>Superior</span>
        <input type='checkbox' onChange={() => setHeroic(!heroic)} defaultChecked/><span className='heroic'>Heroic</span>
        <input type='checkbox' onChange={() => setFabled(!fabled)} defaultChecked/><span className='fabled'>Fabled</span>
        <input type='checkbox' onChange={() => setEternal(!eternal)} defaultChecked/><span className='eternal'>Eternal</span>
      </div>
      <div className='search selection'>
      <span className='input-label'>Search:</span>
        <input placeholder="Search..." onChange={e => (setInput(e.target.value.toLowerCase()))}/>
      </div>
      <ItemList currentList={currentList} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} setCurrentItem={setCurrentItem}/>
    </div>
  )
}