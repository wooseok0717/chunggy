import React, {useState} from 'react';
import ValidStatsModal from './ValidStatsModal.jsx';

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
      {listStats.map(statEntry => {
        return (
          <div className='statEntry' key={statEntry}>
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
          setListStats={setListStats}
          listStats={listStats}
          part={part}
          type={type}
          />)}
    </div>
  )
}