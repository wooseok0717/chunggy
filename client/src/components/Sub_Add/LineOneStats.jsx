import React, {useState} from 'react';
import ValidStatsModal from './ValidStatsModal.jsx';

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
      {listStats.map(statEntry => {
        return (
          <div className='statEntry' key={statEntry}>
            <span className='statLable'>{statEntry}</span>
            <input
              onChange={e => {
                const temp = lineOne;
                temp[statEntry] = e.target.value;
                setLineOne(temp)
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