import React from 'react';

export default function Grade () {

  return (
    <div className='grade'>
      <select>
        <option value='common'>common</option>
        <option value='superior'>superior</option>
        <option value='heroic'>heroic</option>
        <option value='fabled'>fabled</option>
        <option value='eternal'>eternal</option>
      </select>
    </div>
  )
}