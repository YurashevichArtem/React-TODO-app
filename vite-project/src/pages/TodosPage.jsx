import { react, useState } from 'react'
import { AddTodos } from '../components/AddTodos'
import { ShowTodos } from '../components/ShowTodos'
import { Todo } from '../components/Todo'

export function TodosPage() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?? []);

  return (
    <>
      <h2>Todos</h2>
      <AddTodos data={{todos, setTodos}}/>
      <ShowTodos data={{todos, setTodos}}/>
    </>
  )
}