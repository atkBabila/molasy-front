import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from './pages/Layouts/AppLayout.jsx';
import Search from './pages/Search.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';
import Edit from './pages/person/Edit.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout />,
    children : [
      {
        path : '/search',
        element : <Search />
      },
      {
        path : '/login',
        element : <Login />
      },
      {
        path : '/register',
        element : <Register />
      },
      {
        path : '/edit',
        element : <Edit />
      }
      // {
      //   path : '/admin',
      //   element : <Admin />
      // },
      // {
      //   path : '/operateur',
      //   element : <Operateur />
      // }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
