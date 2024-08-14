import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Home/Home.jsx';
import About from './About/About.jsx'; // Make sure to import About
import Contact from './Contact/contact.jsx';
import User from './User/User.jsx';
import Github, { githubInfoLoader } from './Github/Github.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"user/:userid",
        element:<User/>,
      },
      {
        path:"github",
        element:<Github/>,
        loader:githubInfoLoader,
      },
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
);
