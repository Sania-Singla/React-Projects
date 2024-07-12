import { createSlice,nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {                               //state mein ye pura object hoga so we can access the todos specifically by state.todos
        todos: [ 
            // {   //just for demo otherwise it'll be always there
            //     id: nanoid(),
            //     text:"initial msg"
            // }
        ],
    },
    reducers:{
        addTodo: (state,action) => {              // state mein current updated state rhegi and action.payload mein user passed argu mil jayenge 
            // console.log("state=",state)
            // console.log("action=",action)
            // console.log("payload=",action.payload)
            // console.log("reducerList=",todoSlice.reducer)
            // console.log("indivReducer=",todoSlice.actions)
            state.todos.push({
                id: nanoid(),
                text: action.payload                //no need to mention .text extra it will auto detect the property from the action.payload: action= {type: 'todo/addTodo', payload: 'shopping'}
            });
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)   //action= {type: 'todo/removeTodo', payload: 'bdrJgqcipKTht9UeCWd6c'}
        }
    }
})

export default todoSlice.reducer;           //exporting all reducers to register in the store
export const {addTodo,removeTodo} = todoSlice.actions; //exporting individual reducer to use in the components : indiReducer= {addTodo: ƒ, removeTodo: ƒ}