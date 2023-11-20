import { react, useState } from 'react'
import {Outlet} from 'react-router-dom';
import { Footer } from './components/Foter';
import { Header } from './components/Header';
import { GlobalStyle } from './GlobalStyles';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
   
  )
}

export default App
