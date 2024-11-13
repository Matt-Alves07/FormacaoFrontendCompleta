import './index.css';
import App from './App.jsx';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Home from './routes/Home/Home.jsx';
import Post from './routes/Post/Post.jsx';
import Edit from './routes/Edit/Edit.jsx';
import Admin from './routes/Admin/Admin.jsx';
import NewPost from './routes/NewPost/NewPost.jsx';

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/new", element: <NewPost /> },
      { path: "/admin", element: <Admin /> },
      { path: "/posts/:id", element : <Post /> },
      { path: "/posts/edit/:id", element: <Edit /> },
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
