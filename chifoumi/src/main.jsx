import React from 'react';
import ReactDOM from'react-dom/client';
import Login from './components/Login';
import MatchList from './components/MatchList';
import MatchDetail from './components/MatchDetail';
import Register from './components/Register';
import GamePage from './components/GamePage';
import Rules from './components/Rules';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
  },
  {
    path: '/MatchList',
    element: <MatchList />, // Ajoutez la route vers votre DashboardPage
  },
  {
    path: '/MatchDetail',
    element: <MatchDetail />, // Ajoutez la route vers votre DashboardPage
  },
  {
    path: '/Match/:id', // Renommez la route pour la page de jeu avec un paramètre d'ID
    element: <MatchDetail />,
  },
  {
    path: '/Register', 
    element: <Register/>,
  },
  {
    path: '/Rules', 
    element: <Rules/>,
  },
  {
    path: '/GamePage', 
    element: <GamePage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);