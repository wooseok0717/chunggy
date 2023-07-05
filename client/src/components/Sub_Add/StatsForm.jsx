import React from 'react';

export default function StatsForm({list, listStats, setValue}) {

  return (
    listStats.map(statEntry => {
      if (statEntry === 'base attack') {
        return(
          <div>
            <span className='baseattack'>Min</span>
            <input
              onChange={
                e => {
                  const temp = list;
                  if (temp.baseattack === undefined) {
                    temp.baseattack = {};
                  };
                  temp.baseattack.min = e.target.value;
                }
              }
            />
            <span className='baseattack'>Max</span>
            <input
              onChange={
                e => {
                  const temp = list;
                  if (temp.baseattack === undefined) {
                    temp.baseattack = {};
                  };
                  temp.baseattack.max = e.target.value;
                }
              }
            />
          </div>
        )
      } else if (statEntry === 'base magical attack') {
        return(
          <div>
            <span className='magicalattack'>Min</span>
            <input
              onChange={
                e => {
                  const temp = list;
                  if (temp.magicalattack === undefined) {
                    temp.magicalattack = {};
                  };
                  temp.magicalattack.min = e.target.value;
                }
              }
            />
            <span className='magicalattack'>Max</span>
            <input
              onChange={
                e => {
                  const temp = list;
                  if (temp.magicalattack === undefined) {
                    temp.magicalattack = {};
                  };
                  temp.magicalattack.max = e.target.value;
                }
              }
            />
          </div>
        )
      }
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