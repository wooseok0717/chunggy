import React, {useState} from 'react';

export default function Conditioning() {

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
          <div className='conditioning1'>
            Level 1:
          </div>
          <div className='conditioning2'>
            Level 2:
          </div>
        </div>
      )}
    </div>
  )
}