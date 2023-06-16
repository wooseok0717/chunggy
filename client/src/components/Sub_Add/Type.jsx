import React from 'react';

export default function Type ( {part, setType, setMaterial} ) {
  const validTypes = {
    weapon : ['bow', 'chainsword', 'dagger', 'greatsword', 'mace', 'orb', 'polearm', 'spellbook', 'staff', 'sword'],
    armor : ['top', 'bottom', 'shoulder', 'gloves', 'shoes'],
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
      {part === 'armor' && (
        <select onChange={e => {setMaterial(e.target.value)}}>
          <option value='chain'>chain</option>
          <option value='cloth'>cloth</option>
          <option value='leather'>leather</option>
          <option value='plate'>plate</option>
        </select>
      )}
    </div>
  )
}