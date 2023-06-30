import React, {useState} from 'react';
import StatListEntry from './StatListEntry.jsx';
import axios from 'axios';

export default function AddSet ({setAddSet}) {

  const [nameInput, setNameInput] = useState();
  const [name, setName] = useState();
  const [stageOne, setStageOne] = useState({});
  const [stageTwo, setStageTwo] = useState({});
  const [hiddenEffect, setHiddenEffect] = useState({});
  const [stageOneReq, setStageOneReq] = useState();
  const [stageTwoReq, setStageTwoReq] = useState();
  const [hiddenReq, setHiddenReq] = useState();

  const handleSubmit = () => {
    console.log(name, stageOne, stageOneReq, stageTwo, stageTwoReq, hiddenEffect, hiddenReq);
    const config = {
      name, stageOne, stageOneReq, stageTwo, stageTwoReq, hiddenEffect, hiddenReq
    }
    axios.post('/api/sets', config)
    .then(res => console.log(res))
    .catch(() => {
      console.log('something went wrong')
    })
  }

  const handleVerification = () => {
    axios.get(`/api/sets/verify`, {params: {nameInput: nameInput}})
    .then(res => {
      console.log(res)
      if (res) {
        setName(nameInput);
      } else {
        setName('')
      }
    })
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <div className='modal-title'>
            Insert set information
          </div>
        </div>
        <div className='modal-body'>
          <div>
            Name of the set:<input onChange={e => setNameInput(e.target.value)}/>
            <button onClick={handleVerification}>verify</button>
          </div>
          <div>
            Pieces required for first stage effect<input onChange={e => setStageOneReq(e.target.value)} />
            <StatListEntry
              prompt={'stage 1 effect'}
              part={'sets'}
              list={stageOne}
              setList={setStageOne}
            />
          </div>
          <div>
            Pieces required for second stage effect<input onChange={e => setStageTwoReq(e.target.value)} />
            <StatListEntry
              prompt={'stage 2 effect'}
              part={'sets'}
              list={stageTwo}
              setList={setStageTwo}
            />
          </div>
          <div>
            Pieces required for hidden effect<input onChange={e => setHiddenReq(e.target.value)} />
            <StatListEntry
              prompt={'hidden effect'}
              part={'sets'}
              list={hiddenEffect}
              setList={setHiddenEffect}
            />
          </div>
        </div>
        <div className='modal-footer'>
          <button onClick={handleSubmit}>add new set to the database</button>
          <button onClick={() => setAddSet(false)}>close</button>
        </div>
      </div>
    </div>
  )
}