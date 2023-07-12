import React from 'react';

export default function Type ( {part, type, setType, setMaterial} ) {
  const validTypes = {
    weapon : ['bow', 'chainsword', 'dagger', 'greatsword', 'mace', 'orb', 'polearm', 'spellbook', 'staff', 'sword'],
    armor : ['top', 'bottom', 'shoulder', 'gloves', 'shoes'],
    accessary : ['belt', 'earing', 'headgear', 'necklace', 'ring', 'wings'],
    shield : ['shield']
  }

  if (part === undefined || part === 'shield') {
    return (<></>)
  }
  return (
    <div className='type'>
      <select onChange={e => {setType(e.target.value)}}>
        <option value=''selected disabled hidden>choose type</option>
        {validTypes[part].map((x) => {
          return (
            <option value={x}>{x}</option>
          )
        })}
      </select>
      {part === 'armor' && (
        <select onChange={e => {setMaterial(e.target.value)}}>
          <option value=''selected disabled hidden>choose a material</option>
          <option value='chain'>chain</option>
          <option value='cloth'>cloth</option>
          <option value='leather'>leather</option>
          <option value='plate'>plate</option>
        </select>
      )}
      {type === 'headgear' && (
        <select onChange={e => {setMaterial(e.target.value)}}>
          <option value=''selected disabled hidden>choose a material</option>
          <option value='chain'>chain</option>
          <option value='cloth'>cloth</option>
          <option value='leather'>leather</option>
          <option value='plate'>plate</option>
        </select>
      )}
    </div>
  )
}