import React, {useState} from 'react';
import axios from 'axios';
import AddSet from './AddSet.jsx';

export default function SetModal({setSetItem, setClicked, setSetName}) {

  const [filteredSet, setFilteredSet] = useState([]);
  const [addSet, setAddSet] = useState(false);

  const handleChange = e => {
    if (e.target.value.length) {
      axios.get(`api/sets/${e.target.value}/name`)
      .then(res => {
        console.log(res);
        setFilteredSet(res.data)
      });
    } else {
      setFilteredSet([]);
    }
  }
  const handleClick = (set) => {
    setSetItem(set.id);
    setClicked(false);
    setSetName(set.name);
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
          {addSet && (
            <AddSet
              setAddSet={setAddSet}
              setSetItem={setSetItem}
              setClicked={setClicked}
              setSetName={setSetName}

            />
          )}
          <input onChange={handleChange}/>
          <div className='currentList'>
          {filteredSet.map(setEntry => {
            return (<button key={setEntry.id} onClick={()=>{handleClick(setEntry)}}>{setEntry.name}</button>)
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