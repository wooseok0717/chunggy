import React, {useState} from 'react';

export default function Abyss ({abyss, setAbyss}) {

  const [isAbyss, setIsAbyss] = useState(false);
  const [needMedals, setNeedMedals] = useState(false);
  const [currentMedal, setCurrentMedal] = useState();

  const handleAP = e => {
    let temp = abyss;
    temp.ap = e.target.value;
    setAbyss(temp);
  }

  const handleMedals = e => {
    if (currentMedal === undefined) {
      alert('Please select medal first');
    } else {
      let temp = abyss;
      temp.medalCount = e.target.value;
      setAbyss(temp);
    }
  }

  const selectMedal = e => {
    setCurrentMedal(e.target.value)
    let temp = abyss;
    temp.medal = e.target.value;
    setAbyss(temp);
  }

  return (
    <div>
      <form onChange={e => {
        e.target.value === 'yes' ? setIsAbyss(true) : setIsAbyss(false);
      }}>
        Is it an abyss item? :
        <input type='radio' name='abyss' value='yes' />Yes
        <input type='radio' name='abyss' value='no' />No
      </form>
      {isAbyss && (
      <div>
        How much abyss point does it cost?<input onChange={handleAP}/>
        <form onChange={
          e => {
            e.target.value === 'yes' ? setNeedMedals(true) : setNeedMedals(false);
          }
        }>
          Does it cost medals?
          <input type='radio' name='medals' value='yes' /> Yes
          <input type='radio' name='medals' value='no' /> No
        </form>
        {needMedals && (
          <>
            <select onChange={selectMedal}>
              <option value='platinum'>platinum</option>
              <option value='sapphire'>sapphire</option>
              <option value='gold'>gold</option>
              <option value='silver'>silver</option>
            </select>
            <input onChange={handleMedals}/>
          </>
        )}
      </div> )}
    </div>
  )
}