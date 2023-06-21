import React from 'react';

export default function StatsForm({list, setValue}) {

  return (
    list.map(statEntry => {
      return (
        <div className='statEntry' key={statEntry}>
          <span className='statLable'>{statEntry}</span>
          <input
            onChange={e => {
              const temp = lineOne;
              temp[statEntry] = e.target.value;
              setValue(temp)
            }}
          />
        </div>
      )
    })
  )
}