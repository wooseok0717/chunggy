import React from 'react';

export default function ValidStatsModal({setClicked, stats}) {
  // console.log(stats, 'from valid')
  return (

    <div className='modal'>
      <div className='modal-content'>
        <div className="modal-header">
          <h4 className='modal-title'>Title</h4>
        </div>
        <div className='modal-body'>
          {stats.map(stat => {
            return (
              <button
                value={stat}
                onClick={() => {console.log(stat)}}
              >
                {stat}
              </button>
            )
          })}
        </div>
        <div className='modal-footer'>
          <button onClick={() => {setClicked(false)}}>close</button>
        </div>
      </div>
    </div>
  )
}