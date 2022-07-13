import React from 'react';
import { useDispatch } from 'react-redux';
import { donetask, removetask } from '../redux/todoSlice/TodoSlice';
import Edittask from './Edittask';




function Todoithem({ todo }) {
    const dispatch = useDispatch();
    return (
        <div className={` todoithem ${todo.isDone ? "done" : "undone"} `}>
            <div className='text'>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
            </div>
            <span onClick={() => dispatch(donetask({ id: todo.id }))} >{todo.isDone ? "done" : "not done"}</span>
            <Edittask id={todo.id}/>
            <button onClick={() => dispatch(removetask({ id: todo.id }))}>Remove</button>
        </div>
    );
}

export default Todoithem