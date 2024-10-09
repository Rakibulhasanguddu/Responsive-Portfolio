import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home';
import Aboutme from './Pages/Aboutme';
import Project from './Pages/Project';
import Skills from './Pages/Skills';
import Resume from './Pages/Resume';
import Front from './Component/Front';
import Bakend from './Component/Bakend';
import Tools from './Component/Tools';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<Aboutme></Aboutme>
      },
      {
        path:'/project',
        element:<Project></Project>
      },
      {
        path:'/skill',
        element:<Skills></Skills>
      },
      {
        path:'/resume',
        element:<Resume></Resume>
      },
      {
        path:'/front',
        element:<Front></Front>
      },
      {
        path:'/back',
        element:<Bakend></Bakend>
      },
      {
        path:'/tools',
        element:<Tools></Tools>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
