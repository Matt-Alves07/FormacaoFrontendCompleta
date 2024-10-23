import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './routes/Home/Home.jsx';
import Countdown from './routes/Countdown/Countdown.jsx';
import { CountdownProvider } from './context/CountdownContext.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/countdown', element: <Countdown /> },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountdownProvider>
      <RouterProvider router={router} />
    </CountdownProvider>
  </StrictMode>,
)
