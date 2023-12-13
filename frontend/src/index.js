import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.js'
import './index.css'
import {  
  LandingPage,
  DetectItem,
  GreenTrade,
  MarketPlace,
  Test1,
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
    path: '/Test1',
    element: < Test1/>,
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
