import { react, useState } from 'react'

export function AddTodos({ data }) {
  const [count, setCount] = useState(0)
  const {todos, setTodos} = data

  const submitHandler = (event) => {
    event.preventDefault();

    const previousTasks = JSON.parse(localStorage.getItem('todos'));
    const task = {
        id: previousTasks ? previousTasks.length : 0,
        name: event.target[0].value,
        description: event.target[1].value,
        completed: false,
    };

    if (previousTasks) {
        localStorage.setItem('todos', JSON.stringify([...previousTasks, task]));
        setTodos([...previousTasks, task])
    } else {
        localStorage.setItem('todos', JSON.stringify([task]));
        setTodos([task]);
    }
}
  
  return (
    <section>
        <form onSubmit={submitHandler}>
            <label html for="inp-1"></label>
            <input id="inp-1" type="text" />

            <label html for="inp-2"></label>
            <input id="inp-2" />

            <input type="submit" value="Add note" />
        </form>
    </section>
  )
}