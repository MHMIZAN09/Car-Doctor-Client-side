import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider
} from "react-router-dom";
import AuthProvider from './Pages/providers/AuthProvider.jsx';
import router from './Routes/Routes.jsx';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-auto max-w-7xl'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
)
