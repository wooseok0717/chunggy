import React, {useState} from 'react';
import translate from './translate'

export default function Translator () {

  const [userInput, SetUserInput] = useState('');
  const [faction, setFaction] = useState('asmo');
  const [action, setAction] = useState('write');
  const [result, setResult] = useState('');

  const handleChange = (val) => {
    setResult(translate(val,faction,action));
  }

  return (
    <div>
      <button onClick={() =>setFaction('asmo')}>asmodian</button>
      <button onClick={() =>setFaction('elyos')}>elyos</button>
      <button onClick={() =>setAction('write')}>write</button>
      <button onClick={() =>setAction('read')}>read</button>
      <input onChange={e => handleChange(e.target.value)}/>
      <div>
        {result}
        <button>copy</button>
      </div>
    </div>
  )
}