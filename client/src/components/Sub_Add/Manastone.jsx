import React from 'react';

export default function Manastone({manastone, setManastone}) {

  return (
    <div className='manastoneCount'>
      <div>
        Manastones sockets:
        <div>
          Min: <input onChange={e => {
            const temp = manastone;
            temp.min = e.target.value
            setManastone(temp)
          }} />
        </div>
        <div>
          Max: <input onChange={e => {
            const temp = manastone;
            temp.max = e.target.value
            setManastone(temp)
          }} />
        </div>
        <div>
          Manastone Level Maximum: <input onChange={e => {
            const temp = manastone;
            temp.level = e.target.value;
            setManastone(temp)
          }}/>
        </div>
      </div>
    </div>
  )
}