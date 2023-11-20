import { react, useState } from 'react'

export function Footer() {
  const [count, setCount] = useState(0)

  return (
    <footer>
        {
            new Date().getFullYear()
        }
        all right reserved
    </footer>
  )
}