import React, {useState} from 'react';
import validStats from '../validStats';
import images from '../../imgs.js';

export default function ItemList ({ currentList, currentFilter, setCurrentFilter, setCurrentItem }) {

  return (
    <div className='item-list'>
      <div className='list-row'>
        <div className='name-col list-label'>Name</div>
        <div className='stat-col list-label'>
          <select onChange={e => setCurrentFilter(e.target.value)}>
            {validStats.sets.map(stat => (
              <option value={stat}>{stat[0].toUpperCase()+stat.slice(1)}</option>
            ))}
          </select>
        </div>
      </div>
      {currentList.map(item => {
        if (item.total_stats[currentFilter] === undefined) {
          item.total_stats[currentFilter] = 0;
        }
        let name = item.item_name.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
        return (
          <div className='list-row list-entry'>
            <div className='name-col name-entry' onClick={() => setCurrentItem(item)}><img src={
              item.part === 'weapon' ? images[item.grade][item.type] :
              item.part === 'armor' ? images[item.grade][item.type][item.material] :
              item.type === 'wings' ? images.wing :
              null
            }/><span className={item.grade}>{name}</span></div>
            <div className='stat-col'>{item.total_stats[currentFilter]}</div>
          </div>
          )})}
    </div>
  )
}