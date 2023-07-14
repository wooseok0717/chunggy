import React, {useState, useEffect} from 'react';
import StatListEntry from './StatListEntry.jsx';
import SetVerificationModal from './SetVerificationModal.jsx';
import axios from 'axios';

export default function AddSet ({setSetItem, setClicked, setSetName, setAddSet}) {

  const [nameInput, setNameInput] = useState();
  const [name, setName] = useState();
  const [stageOne, setStageOne] = useState({});
  const [stageTwo, setStageTwo] = useState({});
  const [hiddenEffect, setHiddenEffect] = useState({});
  const [stageOneReq, setStageOneReq] = useState();
  const [stageTwoReq, setStageTwoReq] = useState();
  const [hiddenReq, setHiddenReq] = useState();
  const [currentSet, setCurrentSet] = useState('');
  const [needVerification, setNeedVerification] = useState(false);

  const handleApproval = (id,name) => {
    setSetItem(id);
    setSetName(name);
    setClicked(false);
    setAddSet(false);
    setNeedVerification(false);
  }

  useEffect(() => {
    if (currentSet !== '') {
      setNeedVerification(true);
    }
  },[currentSet])

  const handleSubmit = () => {
    console.log(name, stageOne, stageOneReq, stageTwo, stageTwoReq, hiddenEffect, hiddenReq);
    const config = {
      name, stageOne, stageOneReq, stageTwo, stageTwoReq, hiddenEffect, hiddenReq
    }
    axios.post('/api/sets', config)
    .then(() => {
      axios.get(`/api/sets/verify?nameInput=${nameInput}`)
      .then(res => {
        setCurrentSet(res.data);
      })
    })
    .catch(() => {
      console.log('something went wrong')
    })
  }

  const handleVerification = () => {
    axios.get(`/api/sets/verify?nameInput=${nameInput}`)
    .then(res => {
      setCurrentSet(res.data);
      if (typeof res.data === 'object') {
        alert(`the set with the name ${nameInput} exists`)
      } else {
        setName(nameInput);
        alert(`the set with the name doesnt exist and it is good to use`)
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
            Name of the set:<input onChange={e => setNameInput(e.target.value.toLowerCase())}/>
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
        {needVerification && (<SetVerificationModal currentSet={currentSet} setCurrentSet={setCurrentSet} setNeedVerification={setNeedVerification} handleApproval={handleApproval}/>)}
      </div>
    </div>
  )
}