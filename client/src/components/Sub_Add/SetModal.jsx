import React, {useState} from 'react';
import axios from 'axios';
import AddSet from './AddSet.jsx';

export default function SetModal({setClicked}) {

  const [filteredSet, setFilteredSet] = useState([]);
  const [addSet, setAddSet] = useState(false);

  const handleChange = e => {
    console.log(e.target.value)
    axios.get(`api/sets/${e.target.value}`)
    .then(x => setFilteredSet(x.data))
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
            return (<button>{setEntry}</button>)
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