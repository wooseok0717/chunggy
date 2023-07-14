import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserListEntry from './UserListEntry.jsx';

export default function ManageUser ({userData}) {

  const [users, setUsers] = useState([]);
  const [role, setRole] = useState();
  const [input, setInput] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
    .then(res => setUsers(res.data));
  },[]);

  useEffect(() => {
    setFilteredList(users);
  },[users]);

  useEffect(() => {
    filter();
  },[role, input])

  const filter = () => {
    if (role === undefined) {
      let result = users.filter(user => user.name.includes(input));
      setFilteredList(result);
    } else {
      let result = users.filter(user => {
        return user.name.includes(input) && user.role === role
      });
      setFilteredList(result);
    }
  }

  return (
    <>
      <div className='filters'>
        <button onClick={() => setRole('owner')}>Owner</button>
        <button onClick={() => setRole('user')}>Normal User</button>
        <button onClick={() => setRole()}>Reset</button>
        <input onChange={e => setInput(e.target.value)}/>
      </div>
      <div className='user-list'>
        <div className='list-row'>
            <div className='list-row-entry'>Name</div>
            <div className='email-entry'>Email</div>
            <div className='list-row-entry'>Class</div>
            <div className='list-row-entry'>Role</div>
          </div>
          {filteredList.map(user => (
            <UserListEntry user={user} userData={userData}/>
          ))}
      </div>
    </>
  )
}