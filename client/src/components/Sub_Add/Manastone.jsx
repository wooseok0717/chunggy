import React from 'react';

export default function Manastone({manastone, setManastone}) {

  return (
    <div className='manastoneCount'>
      Manastones sockets:
      Min: <input onChange={e => {
        const temp = manastone;
        temp.min = e.target.value
        setManastone(temp)
      }} />
      Max: <input onChange={e => {
        const temp = manastone;
        temp.max = e.target.value
        setManastone(temp)
      }} />
      Manastone Level Maximum: <input onChange={e => {
        const temp = manastone;
        temp.level = e.target.value;
        setManastone(temp)
      }}/>
    </div>
  )
}