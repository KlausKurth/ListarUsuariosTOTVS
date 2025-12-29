import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Login from  './pages/Login';
import ErrorPage from './pages/ErrorPage';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import NewUser from './pages/NewUser';
import Logout from './pages/Logout';



const publicRoute = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {path: '/', element: <Home />},
    {path: '/home', element: <Home />},
    {path:  '/login', element: <Login />},
    {path: '/*', element: <ErrorPage />}
  ]
}])


const protectedRoute = createBrowserRouter([{

  path: '/',
  element: <App />,
  children: [
    {path: '/', element: <Users />},
    {path: '/users', element: <Users />},
    {path: '/users/:id', element: <UserDetails />},
    {path: '/newuser', element: <NewUser />},
    {path: '/logout', element: <Logout />},
    {path: '/*', element: <ErrorPage />}
  ]

}])

// Se o user não existir libera publicroute se ele existir libera protected route
const route = localStorage.getItem("@1app/displayname") === null ? publicRoute : protectedRoute

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
