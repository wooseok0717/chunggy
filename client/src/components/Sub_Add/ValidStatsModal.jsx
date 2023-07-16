import React, { useState, useEffect} from 'react';
import validStats from '../validStats.js';

export default function ValidStatsModal({setClicked, setListStats, listStats, part, type}) {

  const [stats, setStats] = useState([]);

  useEffect(() => {
    if (part === 'sets') {
      setStats(validStats.sets);
    } else if (part === 'weapon') {
      setStats(validStats.weapon)
    } else if (part === 'armor') {
      setStats(validStats[type])
    } else if (part === 'accessary') {
      if ((type === 'headgear') || (type === 'belt') || (type === 'wings')) {
        setStats(validStats[type]);
      } else {
        setStats(validStats.acc)
      }
    } else if (part === 'shield') {
      setStats(validStats[part])
    }
  },[])

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className="modal-header">
          <h4 className='modal-title'>Possible stats</h4>
        </div>
        <div className='modal-body'>
          <div className='button-list'>
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
                  {stat.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}
                </button>
              )
            })}
          </div>
        </div>
        <div className='modal-footer'>
          <button onClick={() => {setClicked(false)}}>close</button>
        </div>
      </div>
    </div>
  )
}