import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.js'
import './index.css'
import {  
  LandingPage,
  DetectItem,
  WeeklyChallengePage,
  GreenTrade,
  Login,
  Register,
  MarketPlace,
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/DetectItem',
    element: < DetectItem/>,
  },

  {
    path: '/WeeklyChallengePage',
    element: <WeeklyChallengePage />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Register',
    element: <Register />,
  },
  {
    path: '/GreenTrade',
    element: < GreenTrade/>,
  },

  {
    path: '/MarketPlace',
    element: < MarketPlace/>,
  },

  {
    path: '/',
    element: < temp/>,
  },

])

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('root')
)
