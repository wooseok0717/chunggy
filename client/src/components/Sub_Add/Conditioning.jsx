import React, {useState} from 'react';
import StatListEntry from './StatListEntry.jsx';

export default function Conditioning({part, type, conditionOne, conditionTwo, setConditionOne, setConditionTwo}) {

  const [hasCondition, setHasCondition] = useState(false);
  return (
    <div className='conditioning'>
      Can this item be conditioned?
      <form onChange={e => {
        e.target.value === 'yes' ? setHasCondition(true) : setHasCondition(false)
      }}>
        <input type='radio' name='condition' value='yes' /> Yes
        <input type='radio' name='condition' value='no' /> No
      </form>
      {hasCondition && (
        <div>
          <StatListEntry
            prompt={'Level 1 Conditioning'}
            type={type}
            part={part}
            list={conditionOne}
            setList={setConditionOne}
          />
          <StatListEntry
            prompt={'Level 2 Conditioning'}
            type={type}
            part={part}
            list={conditionTwo}
            setList={setConditionTwo}
          />
        </div>
      )}
    </div>
  )
}