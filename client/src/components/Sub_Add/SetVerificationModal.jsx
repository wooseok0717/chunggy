import React from 'react';

export default function SetVerificationModal ({currentSet, setNeedVerification, handleApproval, setCurrentSet}) {
  console.log(currentSet);

  const handleClick = () => {
    handleApproval(currentSet.id,currentSet.name)
  }
  return (
    <div className='modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            Is this the set you were looking for?
          </div>
          <div className='modal-body'>
            {currentSet.name}
            {currentSet.level_one_req}
            {currentSet.level_two_req}
          </div>
          <div className='modal-footer'>
            <button onClick={handleClick}>yes</button>
            <button onClick={() => {
              setNeedVerification(false)
              setCurrentSet('');
            }}>no</button>
          </div>
        </div>
    </div>
  )
}