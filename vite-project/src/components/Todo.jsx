import { react, useState } from 'react'

export function Todo({id, name, description, completed, data}) {
  const [count, setCount] = useState(0)
  const {todos, setTodos} = data

    const completeHandler = () => {
        const todos = JSON.parse(localStorage.getItem('todos'));

        const newTodos = todos.map((todo) => {
            const newTodo = {...todo}
            if (+newTodo.id == +id) {
                newTodo.completed = !newTodo.completed;
            }

            return newTodo;
        })

        localStorage.setItem('todos', JSON.stringify(newTodos));
        setTodos(newTodos);
    }

    const removeHandler = () => {
        const todos = JSON.parse(localStorage.getItem('todos'));

        const newTodos = todos.filter((todo) => {
            if (+todo.id == +id) {
                return false;
            }

            return true;
        })

        localStorage.setItem('todos', JSON.stringify(newTodos));
        setTodos(newTodos);
    }

  return (
    <div>
        <p>{ name }</p>
        <p>{ description }</p>
        <p>Completed: { completed ? "Yes" : "No"}</p>

        <div>
            <button onClick={completeHandler}>Complete</button>
            <button onClick={removeHandler}>Remove</button>
        </div>
    </div>
  )
}