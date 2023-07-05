import React, {useState, useEffect} from 'react';
import ValidStatsModal from './ValidStatsModal.jsx';
import StatsForm from './StatsForm.jsx'
import stats from '../validStats';

export default function StatListEntry ({prompt, part ,type, list, setList}) {
  const [clicked, setClicked] = useState(false);
  const [listStats, setListStats] = useState([]);

  return (
    <div>
      {prompt}
      <button
        onClick={() => setClicked(true)}
      >
        add more stats
      </button>
      <StatsForm list={list} listStats={listStats} setValue={setList} />
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