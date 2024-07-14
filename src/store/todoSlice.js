import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks:[]
    },
    reducers: {
        addTask(state, action) {
            state.tasks.push({
                id: new Date().toISOString(),
                text: action.payload,
                completed: false,
            })
        },
        toggleCompleted(state, action) {
            const task = state.tasks.find(task => task.id === action.payload);
            if(task){
                task.completed = !task.completed;
            }
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter((task)=>task.id!==action.payload);

        },
    },
});

export const {addTask, deleteTask, toggleCompleted} = todoSlice.actions;

export default todoSlice.reducer;