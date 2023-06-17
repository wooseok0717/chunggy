import React from 'react';

export default function SetModal({setClicked}) {
  return (

    <div className='modal'>
      <div className='modal-content'>
        <div className="modal-header">
          <h4 className='modal-title'>Search Set</h4>
        </div>
        <div className='modal-body'>
          <input />
        </div>
        <div className='modal-footer'>
          <button onClick={() => {setClicked(false)}}>close</button>
        </div>
      </div>
    </div>
  )
}