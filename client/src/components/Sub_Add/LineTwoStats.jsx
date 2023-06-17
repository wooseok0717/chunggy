import React, {useState, useEffect} from 'react';
import validStats from '../validStats.js';
import ValidStatsModal from './ValidStatsModal.jsx';

export default function LineTwoStats ({part ,type, lineTwo, setLineTwo}) {
  const [clicked, setClicked] = useState(false);
  const [stats, setStats] = useState();
  const [listStats, setListStats] = useState([]);

  useEffect(() => {
    if (part === 'weapon') {
      setStats(validStats.weapon)
    } else if (part === 'armor') {
      setStats(validStats[type])
    }
  },[part, type])
  return (
    <div className='lineTwo'>
      Line Two Stats
      <button
        onClick={() => setClicked(true)}
      >
        add more stats
      </button>
      {listStats.map(statEntry => {
        return (
          <div className='statEntry'>
            <span className='statLable'>{statEntry}</span>
            <input
              onChange={e => {
                const temp = lineTwo;
                temp[statEntry] = e.target.value;
                setLineTwo(temp)
              }}
            />
          </div>
        )
      })}
      {clicked && (
        <ValidStatsModal
          setClicked={setClicked}
          stats={stats}
          setListStats={setListStats}
          listStats={listStats}
          />)}
    </div>
  )
}