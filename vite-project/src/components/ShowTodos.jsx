import { react, useState } from 'react'
import styled from 'styled-components'
import { Todo } from './Todo'

const SectionElement = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export function ShowTodos({ data }) {
  const {todos, setTodos} = data

  return (
    <SectionElement>
        { todos.map(({id, name, description, completed}, index) => <Todo key={id} id={id} name={name} description={description} completed={completed} data={...data}/>) }
    </SectionElement>
    )
}