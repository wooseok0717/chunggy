import React, {useState} from 'react';
import SetModal from './SetModal.jsx';

export default function SetItem({setSetItem}) {

  const [clicked, setClicked] = useState(false);
  const [isSet, setIsSet] = useState(false);
  const [setName, setSetName] = useState();

  return (
    <div className='setContainer'>
      <form className='setItem' onChange={e=>{
        if (e.target.value === 'yes') {
          setIsSet(true);
        } else {
          setIsSet(false);
        }
      }}>
        Is it a set item? :
        <input type='radio' value='yes' name='setItem' /><span>Yes</span>
        <input type='radio' value='no' name='setItem' /><span>No</span>
      </form>
      {setName && (<>{setName}</>)}
      {isSet && (<button onClick={() => {setClicked(true)}} >add a set</button>)}
      {clicked && (<SetModal setSetName ={setSetName} setSetItem={setSetItem} setClicked={setClicked}/>)}
    </div>
  )
}