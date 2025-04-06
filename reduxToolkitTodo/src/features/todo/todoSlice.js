import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialstate = {
    todos : [{id : 1, text : "Hello text"}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialstate,
    reducer : {
        addtodo: (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removetodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addtodo, removetodo} = todoSlice.actions 

export default todoSlice.reducer