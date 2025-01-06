import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import Gallery from './pages/gallery';
import Text from './pages/linktext';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1 style={{ textAlign: 'center' }}>The page is not found 404 </h1>,
  },
  
  {
    path: "/home",
    element: <Home />,
    errorElement: <h1 style={{ textAlign: 'center' }}>The page is not found 404 </h1>,
  },

  {
    path: "/gallery",
    element: <Gallery />,
  },

  {
    path: "/linktext",
    element: <Text />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);


