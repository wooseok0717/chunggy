import React, { useState, useEffect} from 'react';
import validStats from '../validStats.js';

export default function ValidStatsModal({setClicked, setListStats, listStats, part, type}) {

  const [stats, setStats] = useState([]);

  useEffect(() => {
    if (part === 'weapon') {
      setStats(validStats.weapon)
    } else if (part === 'armor') {
      setStats(validStats[type])
    }
  },[])

  return (

    <div className='modal'>
      <div className='modal-content'>
        <div className="modal-header">
          <h4 className='modal-title'>Possible stats</h4>
        </div>
        <div className='modal-body'>
          {!stats.length && (<>Select part and type</>)}
          {stats.map(stat => {
            return (
              <button
                key={stat}
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