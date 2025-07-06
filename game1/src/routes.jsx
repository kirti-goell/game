import React from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from '../src/Home'
import App from '../src/App'
export default function Routes() {
    const router = createBrowserRouter([
        {
            path:"/word-search",
            element:<App/>
        },
        {
           path:"/",
           element:<Home/>
        }
    ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
