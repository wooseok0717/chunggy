import React from 'react';

export default function Grade ({setGrade}) {

  return (
    <div className='grade'>
      <select onChange={e=> setGrade(e.target.value)}>
        <option value=''selected disabled hidden>choose a grade</option>
        <option value='common'>common</option>
        <option value='superior'>superior</option>
        <option value='heroic'>heroic</option>
        <option value='fabled'>fabled</option>
        <option value='eternal'>eternal</option>
      </select>
    </div>
  )
}