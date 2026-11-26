import { Component, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Mobails from './components/Mobails/Mobails';
import Laptops from './components/Laptops/Laptops';
import Users from './components/Users/Users';
import Users2 from './components/Users/Users2';
import UserDetails from './components/UserDetails/UserDetails';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: '/', Component: Home },
      { path: 'mobails', Component: Mobails },
      { path: 'laptops', Component: Laptops },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users,

      },
      {
        path: 'users2',
        element: <Suspense fallback={<>loading........</>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      }
    ]
  },








  {
    path: 'about',
    element: <div>welcome to about me</div>
  },
  {
    path: 'blogs',
    element: <div>welcome to blogs  me</div>
  },
  {
    path: 'app',
    Component: App
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </StrictMode>,
)
