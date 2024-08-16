import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header';
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import LetsTalk from './components/LetsTalk/LetsTalk';
import Projects from './components/Projects/Projects';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '',
        index:true,
        element: <Home/>
      },
      {
        path: 'home',
        element: <Home/>
      },
      {
        path:'about',
        element: <About/>,
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'projects',
        element: <Projects/>,
      },
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
