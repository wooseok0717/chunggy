import React from 'react';

export default function Manastone({manastone, setManastone}) {

  return (
    <div className='manastoneCount'>
      Max: <input onChange={e => {
        const temp = manastone;
        temp.max = e.target.value
        setManastone(temp)
      }} />
      Min: <input onChange={e => {
        const temp = manastone;
        temp.min = e.target.value
        setManastone(temp)
      }} />
    </div>
  )
}