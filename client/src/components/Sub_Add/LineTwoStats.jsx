import React, {useState} from 'react';
import ValidStatsModal from './ValidStatsModal.jsx';
import StatsForm from './StatsForm.jsx'

export default function LineTwoStats ({part ,type, lineTwo, setLineTwo}) {
  const [clicked, setClicked] = useState(false);
  const [listStats, setListStats] = useState([]);

  return (
    <div className='lineTwo'>
      Line Two Stats
      <button
        onClick={() => setClicked(true)}
      >
        add more stats
      </button>
      <StatsForm list={listStats} setValue={setLineTwo} />
      {clicked && (
        <ValidStatsModal
          setClicked={setClicked}
          setListStats={setListStats}
          listStats={listStats}
          part={part}
          type={type}
          />)}
    </div>
  )
}