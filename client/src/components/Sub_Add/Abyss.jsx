import React, {useState} from 'react';

export default function Abyss () {

  const [isAbyss, setIsAbyss] = useState(false);
  const [needMedals, setNeedMedals] = useState(false);
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
        How much abyss point does it cost?<input />
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
            <select>
              <option value='platinum'>platinum</option>
              <option value='sapphire'>sapphire</option>
              <option value='gold'>gold</option>
              <option value='silver'>silver</option>
            </select>
            <input />
          </>
        )}
      </div> )}
    </div>
  )
}