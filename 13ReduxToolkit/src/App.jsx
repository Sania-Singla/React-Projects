import './App.css'
import { Provider } from 'react-redux'
import store from "./app/store"
import ToDoForm from './components/todoForm'
import ToDoList from './components/todoList'

function App() {
  return (
    //similar to context api
    <Provider store={store}>      
      <ToDoForm/>
      <ToDoList/>
    </Provider>
  )
}

export default App
