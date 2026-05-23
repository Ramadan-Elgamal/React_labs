import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Layout } from './pages/layout.jsx'
import Landing from './pages/Landing'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ProductDetails from './pages/ProductDetails.jsx'
import NotFound from './pages/NotFound.jsx'
import Cart from './pages/Cart.jsx'
import { Provider } from 'react-redux';
import { store } from './store/RTK/store';
import { LanguageProvider } from './store/context/LanguageContext.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        async lazy() {
          const module = await import('./pages/Landing');
          return { Component: module.default };
        },
      },
      {
        path: "products",
        async lazy() {
          const module = await import('./App.jsx');
          return { Component: module.default };
        },
      },
      {
        path: "products/:id",
        async lazy() {
          const module = await import('./pages/ProductDetails.jsx');
          return { Component: module.default };
        },
      },
      {
        path: "*",
        async lazy() {
          const module = await import('./pages/NotFound.jsx');
          return { Component: module.default };
        },
      },
      {
        path: "/products/cart",
        async lazy() {
          const module = await import('./pages/Cart.jsx');
          return { Component: module.default };
        },
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <LanguageProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </LanguageProvider>
  </Provider>
)