import React,{useState,useEffect} from 'react'
import Task from "./Task.js"  
    
function Home() {
  const a=localStorage.getItem("tasks")?
  JSON.parse(localStorage.getItem("tasks")):[];
  const [tasks,setTasks]=useState(a);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const submitHandler=(e)=>{
    e.preventDefault();
    setTasks([...tasks,{title,description}]);
   };
   
 const deleteTask=(index)=>{
       const arr= tasks.filter((val,i)=>{
              return i!==index;
       })
       setTasks(arr); 
 }
 useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks));
 },[tasks])

  return (
    <div className="container">
      <h1>DAILY GOALS</h1>
         <form onSubmit={submitHandler}>
          <input type="text" placeholder="Title"
          value={title} 
          onChange={(e)=>setTitle(e.target.value)}></input>
          <textarea placeholder="Description"
            value={description} 
            onChange={(e)=>setDescription(e.target.value)}></textarea>
          <button type="submit">ADD</button>
         </form>
        {
          tasks.map((item,index)=>(
            <Task 
            key={index} 
            Title={item.title} 
            Description={item.description}
            index={index}
            deleteTask={deleteTask}
            />
         

          ))
        }
    </div>
  )
}

export default Home