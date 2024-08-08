import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from './components/AppLayout'
import HomePage from './components/HomePage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{path: "/",element: <HomePage />}],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
