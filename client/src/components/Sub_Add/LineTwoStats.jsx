import React, {useState, useEffect} from 'react';
import validStats from '../validStats.js';
import ValidStatsModal from './ValidStatsModal.jsx';

export default function LineTwoStats ({part ,type}) {
  const [clicked, setClicked] = useState(false);
  const [stats, setStats] = useState();
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
      {clicked && (<ValidStatsModal setClicked={setClicked} stats={stats}/>)}
    </div>
  )
}