import { createSlice } from '@reduxjs/toolkit';

const initialState = {
todolist : [
    {
        id : Math.random(),
        title:"to do ithem 1",
        description: "description 1",
        isDone:false,
    },
    {
        id : Math.random(),
        title:"to do ithem 2",
        description: "description 2",
        isDone:false,
    },
    {
        id : Math.random(),
        title:"to do ithem 3",
        description: "description 3",
        isDone:true,
    },
],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {

    addtask: (state, action) => {
      state.todolist.push(action.payload)
    },
    removetask: (state, action) => {
        state.todolist=state.todolist.filter((el)=>el.id!==action.payload.id)
      },
      donetask: (state, action) => {
       let i=state.todolist.findIndex((el)=>el.id===action.payload.id);
       state.todolist[i]={...state.todolist[i],isDone:!state.todolist[i].isDone,}
      },
      updtask: (state, action) => {
        let i=state.todolist.findIndex((el)=>el.id===action.payload.id);
        state.todolist[i]={...state.todolist[i],
        title:action.payload.edited.title,
        description:action.payload.edited.description,
        };
       },
  },
});

// Action creators are generated for each case reducer function
export const { addtask, removetask, donetask,updtask } = todoSlice.actions

export default todoSlice.reducer;