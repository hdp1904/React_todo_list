import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const increase = () => {
    setCount(count => count +1);
  }

  const decrease = () => {
    setCount(count => count -1);
  }

  const reset = () => {
    setCount(0);
  }

  const addTodo = (e) => {
    setTodo(e.target.value);
  }

  const addTodoList = () => {
    setTodoList([todoList, todo]);
  }

  const deleteItem = (e) => {
    setTodoList(todoList.filter( (i,index) =>  i+index !== e.target.parentElement.id))
  }

  return (
    <>
    <div>
      <button onClick={increase}>Addition</button>
      <button onClick={decrease}>Subtraction</button>
      <button onClick={reset}>Reset</button>
      <p>The number is : {count}</p>
    </div>
    <div>
      <input type="text" onChange={e=>addTodo(e)}/>
      <button onClick={addTodoList}>Add To List</button>
      {todoList.map((item,index)=> <li key={item+index} id={item+index}>
        {item}
        <button onClick={deleteItem}>Delete</button>
      </li>
      )}

    </div>
    </>
  )
}

export default App
