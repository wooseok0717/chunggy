import React from 'react';

export default function Enchant({setMaxEnchant}) {

  return (
    <div className='enchant'>
      Max Enchantment Level : <input onChange={e => setMaxEnchant(e.target.value)} />
    </div>
  )
}