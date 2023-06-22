import React from 'react';

export default function StatsForm({list, listStats, setValue}) {

  return (
    listStats.map(statEntry => {
      return (
        <div className='statEntry' key={statEntry}>
          <span className='statLable'>{statEntry}</span>
          <input
            onChange={e => {
              const temp = list;
              temp[statEntry] = e.target.value;
              setValue(temp)
            }}
          />
        </div>
      )
    })
  )
}