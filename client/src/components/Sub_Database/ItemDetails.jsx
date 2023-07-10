import React from 'react';

export default function ItemDetails ({item}) {
  console.log(item)
  return (
    <div>
      ID: {item.item_number}
      Name: {item.item_name}
      {item.type}

      <div className='line-one'>
        {Object.entries(item.line_one).map(([key, value]) => {
          console.log(key, value);
          if (key === 'baseattack') {
            return (
              <div key={key}>
                Attack: {value.min} ~ {value.max}
              </div>
            )
          }
          return (
            <div key={key}>
              {key}: {value}
            </div>
          )
        })}
      </div>
      <div className='line-two'>
        {Object.entries(item.line_two).map(([key, value]) => {
          console.log(key, value);
          return (
            <div key={key}>
              {key}: {value}
            </div>
          )
        })}
      </div>
    </div>
  )
}