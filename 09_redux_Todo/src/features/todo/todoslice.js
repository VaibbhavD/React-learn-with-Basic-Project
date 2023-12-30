import { createSlice,nanoid } from "@reduxjs/toolkit";

 const initialstate={
    todos:[{
        id:1,
        text:"Vaibhav Dhamange"
    }]
 }

 export const todoslice=createSlice({
    name:"todo",
    initialstate,
    reducers:{
        addtodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        removetodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id!==action.payload)
        },
    }
 })

 export const{addtodo,removetodo}=todoslice.actions
 export default todoslice.reducer