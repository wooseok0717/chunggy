import React, {useState} from 'react';
import axios from 'axios';
import SignOut from './SignOut.jsx';

export default function UserInfo ({currentUser, setFillOut, SetCurrentUser}) {

  const [ign, setIgn] = useState('');
  const [job, setJob] = useState('');

  const handleSubmit = () => {
    if (ign.length <= 3) {
      alert('ign has to be longer than 3 letters');
    } else if (job === '') {
      alert('select a class');
    } else {
      axios.post(`/api/user`, {ign,job,currentUser})
      .then(() => {setFillOut(false)})
    }
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className="modal-header">
          <h4 className='modal-title'>Create user info</h4>
        </div>
        <div className='modal-body'>
          In game name: <input onChange={e => setIgn(e.target.value.toLowerCase())}/>
          Class:
          <select onChange={e => setJob(e.target.value)}>
            <option value="" disabled selected>Select a class</option>
            <option value='assassin'>Assassin</option>
            <option value='chanter'>Chanter</option>
            <option value='cleric'>Cleric</option>
            <option value='executioner'>Executioner</option>
            <option value='gladiator'>Gladiator</option>
            <option value='ranger'>Ranger</option>
            <option value='sorcerer'>Sorcerer</option>
            <option value='spirit master'>Spirit Master</option>
            <option value='templar'>Templar</option>
          </select>
        </div>
        <div className='modal-footer'>
          <button onClick={handleSubmit}>Submit</button>
          <SignOut SetCurrentUser={SetCurrentUser}/>
        </div>
      </div>
    </div>
  )
}