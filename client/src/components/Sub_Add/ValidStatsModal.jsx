import React from 'react';

export default function ValidStatsModal({setClicked, stats, setListStats, listStats}) {
  // console.log(stats, 'from valid')
  return (

    <div className='modal'>
      <div className='modal-content'>
        <div className="modal-header">
          <h4 className='modal-title'>Possible stats</h4>
        </div>
        <div className='modal-body'>
          {stats.map(stat => {
            return (
              <button
                value={stat}
                onClick={() => {
                  setClicked(false);
                  if (!listStats.includes(stat)) {
                    setListStats(listStats.concat(stat))
                  }
                }}
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