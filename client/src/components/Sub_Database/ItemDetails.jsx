import React, {useState, useEffect} from 'react';
import images from '../../imgs.js';
import axios from 'axios';
import emptysocket from '../../../assets/emptysocket.png'
import potentialsocket from '../../../assets/potentialsocket.png'

export default function ItemDetails ({item}) {
  console.log(item)
  console.log(setDetails);

  const [socket,setSocket] = useState([]);
  const [setDetails, setSetDetails] = useState();
  const [itemList, setItemList]= useState([]);

  useEffect(() => {
    let arr = [];
    for (let x = 0; x < item.manastones.max; x++) {
      if (x > Number(item.manastones.min) - 1) {
        arr.push(2);
      } else {
        arr.push(1);
      }
    }
    setSocket(arr);
  },[item])

  useEffect(() => {
    if (item.set_id === null) {
      console.log('i dont have a set');
    } else {
      axios.get(`api/sets/id?setId=${item.set_id}`)
      .then(({data}) => setSetDetails(data));
    }
  },[item])

  useEffect(() => {
    if (setDetails !== undefined) {
      axios.get(`api/items/bySetId?setId=${item.set_id}`)
      .then(({data}) => setItemList(data));
    }
  },[setDetails])

  const captipalize = (name) => {
    return (name.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '))
  }
  return (
    <div className='item-detail-container'>
      <div className='detail-header'>
        <div>
          ID: {item.item_number}
        </div>
        <div>
          <img src={
            item.part === 'weapon' ? images[item.grade][item.type] :
            item.part === 'armor' ? images[item.grade][item.type][item.material] :
            item.type === 'wings' ? images.wing :
            null
          }/>
          <span className={`detail-name ${item.grade}`}>
            {captipalize(item.item_name)}
          </span>
        </div>
        <div>
          {captipalize(item.type)}
        </div>
      </div>
      <div className='detail-line-one'>
        {Object.entries(item.line_one).map(([key, value]) => {
          if (key === 'baseattack') {
            return (
              <div key={key}>
                Attack: {value.min} ~ {value.max}
              </div>
            )
          }
          return (
            <div key={key}>
              {captipalize(key)}: {value}
            </div>
          )
        })}
      </div>
      <div className='detail-line-two'>
        {Object.entries(item.line_two).map(([key, value]) => {
          return (
            <div key={key}>
              {key}: {value}
            </div>
          )
        })}
      </div>
      <div className='detail-enchantment'>
        Enchantment Level 0/{item.max_enchant}
      </div>
      {item.manastones.min !== undefined && (
        <div className='detail-manastones'>
          <div>
            Manastone sockecting (for manastones of level {item.manastones.level} or lower)
          </div>
          <div>
            {socket.map(box => {
              if (box === 1) {
                return (<img src={emptysocket}/>)
              } else {
                return (<img src={potentialsocket}/>)
              }
            })}
          </div>
        </div>
      )}
      {setDetails !== undefined && (
        <div className='detail-set'>
          <div>
            <span className={item.grade}>{captipalize(setDetails.name)}</span>
            ({setDetails.hidden_req ? setDetails.hidden_req
            :setDetails.level_two_req ? setDetails.level_two_req
            :setDetails.level_one_req ? setDetails.level_one_req
            : null})
          </div>
          {itemList.map(current => (<div><span className={item.grade}>{captipalize(current.item_name)}</span></div>))}
        </div>
      )}
    </div>
  )
}