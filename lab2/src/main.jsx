import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Layout } from './layout'
import Landing from './Landing'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ProductDetails from './ProductDetails.jsx'

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Landing,
        async lazy() {
          const module = await import('./Landing');
          return { Component: module.default };
        },
      },
      {
        path: "products",
        Component: App,
        async lazy() {
          const module = await import('./App.jsx');
          return { Component: module.default };
        },
      },
      {
        path: "products/:id",
        Component: ProductDetails,
        async lazy() {
          const module = await import('./ProductDetails.jsx');
          return { Component: module.default };
        },
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)





