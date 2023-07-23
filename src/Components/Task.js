import React from 'react'

export default function Task({Title,Description,deleteTask,index}) {
  return (
    <div className="task">
    <div>
     <p>{Title}</p>
     <span>{Description}</span>
    </div>
      <button onClick={()=>deleteTask(index) }>-</button>
    </div>
  )
}
