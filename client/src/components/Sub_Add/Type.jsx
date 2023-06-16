import React from 'react';

export default function Type ( {part, setType} ) {
  const validTypes = {
    weapon : ['bow', 'chainsword', 'dagger', 'greatsword', 'mace', 'orb', 'polearm', 'spellbook', 'staff', 'sword'],
    armor : ['chain', 'cloth', 'leather', 'plate'],
    accessary : ['belt', 'earing', 'headgear', 'necklace', 'ring', 'wing'],
    shield : ['shield']
  }

  if (part === undefined) {
    return (<></>)
  }
  return (
    <div className='type'>
      <select onChange={e => {setType(e.target.value)}}>
        {validTypes[part].map((x) => {
          return (
            <option value={x}>{x}</option>
          )
        })}
      </select>
    </div>
  )
}