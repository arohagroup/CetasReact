import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';  

import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { UtilProvider } from './components/services/utilService';





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <UtilProvider>
    <RouterProvider router={router}/>
  </UtilProvider>

);

