  import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Addtodo from './Addtodo'
import Todoithem from './Todoithem'
  
  const Todolist = () => {
     const todos = useSelector((state) => state.todo.todolist)
     console.log(todos)
     const [showdone, setshowdone] = useState(false)
    return (
      <div className='todolist'>
        <Addtodo/>
        <button onClick={()=>setshowdone(!showdone) }>{showdone?"show done":"show undone"}</button>
        {todos.filter((todo)=>todo.isDone===showdone).map((todo)=>(
            <Todoithem todo={todo}/>
        ))}
      </div>
    )
  }
  
  export default Todolist