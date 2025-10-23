import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router"
import App from './App'
import './index.css'
import Home, { loader as homeLoader } from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import DetallePlanta from './pages/DetallePlanta.jsx'
import Layout from './components/Layout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import ProtectedRouteAdmin from './components/ProtectedRouteAdmin.jsx'


let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute element={<Home />} />,
        loader: homeLoader,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/detalle/:id",
        element:  <ProtectedRoute element={<DetallePlanta />} />,
      },
    ]
  },
  {
    path: "/admin",
    element: <ProtectedRouteAdmin element={<div>CRUD DE PRODUCTOS</div>} />,
    children: []
  },
  {
    path: "*",
    element: <div>404</div>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
