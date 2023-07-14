import React from 'react';
import StatListEntry from './StatListEntry.jsx';

export default function Stats ({part, type, lineOne, lineTwo, setLineOne, setLineTwo}) {

  if (type === undefined && part !== 'shield') {
    return (
      <div className='stats'>please select part and type to add stats</div>
    )
  }
  return (
    <div className='stats'>
      <div>
        <StatListEntry
          prompt={'Line One Stats:'}
          type={type}
          part={part}
          list={lineOne}
          setList={setLineOne}
        />
      </div>
      <div>
        <StatListEntry
          prompt={'Line Two Stats:'}
          type={type}
          part={part}
          list={lineTwo}
          setList={setLineTwo}
        />
      </div>
    </div>
  )
}