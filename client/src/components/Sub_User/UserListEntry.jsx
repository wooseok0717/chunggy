import React, {useState} from 'react';
import axios from 'axios';

export default function UserListEntry({user, userData}) {

  const [userRole, setUserRole] = useState(user.role);

  console.log(user)

  const handleChange = e => {
    setUserRole(e.target.value);
    axios.put('/api/user/role', {id: user.id, role: e.target.value})
  }

  return (
    <div className='list-row list-entry'>
      <div className='list-row-entry'>{user.name}</div>
      <div className='email-entry'>{user.email}</div>
      <div className='list-row-entry'>{user.class}</div>
      <div className='list-row-entry'>
        {userData.role === 'owner'
        ? (
          <select value={userRole} onChange={handleChange}>
            <option value='owner'>owner</option>
            <option value='manager'>manager</option>
            <option value='user'>user</option>
          </select>
        )
        : user.role}
      </div>
    </div>
  )
}