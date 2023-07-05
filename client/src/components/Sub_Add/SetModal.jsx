import React, {useState} from 'react';
import axios from 'axios';
import AddSet from './AddSet.jsx';

export default function SetModal({setSetItem, setClicked}) {

  const [filteredSet, setFilteredSet] = useState([]);
  const [addSet, setAddSet] = useState(false);

  const handleChange = e => {
    if (e.target.value.length) {
      axios.get(`api/sets/${e.target.value}/name`)
      .then(res => setFilteredSet(res.data));
    } else {
      setFilteredSet([]);
    }
  }
  const handleClick = (val) => {
    setSetItem(val);
    setClicked(false);
  }
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className="modal-header">
          <h4 className='modal-title'>Search Set</h4>
        </div>
        <div className='modal-body'>
          <div>
            Set you're looking for doesn't exist?
            <button onClick={() => setAddSet(true)}>Add a new set</button>
          </div>
          {addSet && (<AddSet setAddSet={setAddSet}/>)}
          <input onChange={handleChange}/>
          <div className='currentList'>
          {filteredSet.map(setEntry => {
            return (<button onClick={()=>{handleClick(setEntry.id)}}>{setEntry.name}</button>)
          })}
          </div>
        </div>
        <div className='modal-footer'>
          <button onClick={() => {setClicked(false)}}>close</button>
        </div>
      </div>
    </div>
  )
}