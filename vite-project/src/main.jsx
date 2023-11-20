import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { TodosPage } from './pages/TodosPage.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter( [
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/home",
        element: <HomePage/> 
      },
      {
        path: "/todos",
        element: <TodosPage/>
      },
    ],
    
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
