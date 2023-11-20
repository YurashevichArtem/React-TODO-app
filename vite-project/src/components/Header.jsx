import { react, useState } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  const [count, setCount] = useState(0)

  return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to={"/home"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={"/todos"}>
                        Todo
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}