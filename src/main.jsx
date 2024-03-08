import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Works from './pages/Work.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'
import Error from './pages/Error.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/works',
    element: <Works />,
  },
  {
    path: '/resume',
    element: <Resume />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);