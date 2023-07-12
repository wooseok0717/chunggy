import React, {useState} from 'react';
import validStats from '../validStats';
import images from '../../imgs.js';

export default function ItemList ({ currentList, currentFilter, setCurrentFilter, setCurrentItem }) {

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <select onChange={e => setCurrentFilter(e.target.value)}>
                {validStats.sets.map(stat => (
                  <option value={stat}>{stat}</option>
                ))}
              </select>
            </td>
          </tr>
          {currentList.map(item => {
            console.log(item);
            if (item.total_stats[currentFilter] === undefined) {
              item.total_stats[currentFilter] = 0;
            }
            return (
              <tr>
                <td onClick={() => setCurrentItem(item)}><img src={
                  item.part === 'weapon' ? images[item.grade][item.type] :
                  item.part === 'armor' ? images[item.grade][item.type][item.material] :
                  item.type === 'wings' ? images.wing :
                  null
                }/>{item.item_name}</td>
                <td>{item.total_stats[currentFilter]}</td>
              </tr>
          )})}
        </tbody>
      </table>
    </div>
  )
}