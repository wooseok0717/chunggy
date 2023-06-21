import React, {useState} from 'react';
import ValidStatsModal from './ValidStatsModal.jsx';
import StatsForm from './StatsForm.jsx'

export default function LineOneStats ({part ,type, lineOne, setLineOne}) {
  const [clicked, setClicked] = useState(false);
  const [listStats, setListStats] = useState([]);

  return (
    <div className='lineOne'>
      Line One Stats
      <button
        onClick={() => setClicked(true)}
      >
        add more stats
      </button>
      <StatsForm list={listStats} setValue={setLineOne} />
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