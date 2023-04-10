import React, { useState } from 'react';
import stats from './validStats.js';

export default function Search () {

  console.log(stats);

  return (
    <div className='search'>
      Category:
      <select>
        <option value="" disabled selected>Select a category</option>
        <option value='Weapon'>Weapon</option>
        <option value='Armor'>Armor</option>
      </select>
      Type:
      <select className='type'>
        <option value="" disabled selected>Select a type</option>
        <option value='Cloth'>Cloth</option>
        <option value='Leather'>Leather</option>
        <option value='Chain'>Chain</option>
        <option value='Plate'>Plate</option>
      </select>
      Part:
      <select className='part'>
        <option value='Top'>Top</option>
        <option value='Bottom'>Bottom</option>
        <option value='Shoulder'>Shoulder</option>
        <option value='Gloves'>Gloves</option>
        <option value='Shoes'>Shoes</option>
      </select>
      <label for='pvp'>Pvp:</label>
      <input type='checkbox' value='pvp' id='pvp' />
      <div className='grade'>
        Grade:
        <input type='checkbox' value='Eternal' id='Eternal'/>
        <label for='Eternal'>Eternal</label>
        <input type='checkbox' value='Fabled' id='Fabled'/>
        <label for='Fabled'>Fabled</label>
        <input type='checkbox' value='Heroic' id='Heroic'/>
        <label for='Heroic'>Heroic</label>
        <input type='checkbox' value='Superior' id='Superior'/>
        <label for='Superior'>Superior</label>
        <input type='checkbox' value='Common' id='Common'/>
        <label for='Common'>Common</label>
      </div>
      Sort by:
      <select className='sort'>
        <option value='Accuracy'>Accuracy</option>
      </select>
      <div>
        <input type='text' placeholder='Search...' />
      </div>
    </div>
  )
}