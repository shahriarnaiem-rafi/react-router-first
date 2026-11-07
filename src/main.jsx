import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx';
import Mobails from './components/Mobails/Mobails.jsx';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router";
import Root from './components/Root/Root.jsx';
import Leptops from './components/Leptops/Leptops.jsx';
import Users from './components/Users/Users.jsx';
import Users2 from './components/Users/Users2.jsx';

const usersPromis= fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());


const router = createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      {index:true, Component: Home },
      {path:'mobails', Component:Mobails },
      {path:'leptops', Component:Leptops },
      {
        path:'users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users
        },
      {
        path:'users2',
        element: <Suspense fallback={<span>looding.....</span>}>
              <Users2 usersPromis={usersPromis}></Users2>
        </Suspense>
        }
    ]
  },
  {
    path:'about',
    element: <div>Welcome to about  router</div>
  },
  {
    path:'contact',
    element: <div>Welcome to contact  router</div>
  },{
    path:'app',
    Component: App
  },{
    path:'app2',
    element:<App></App>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
