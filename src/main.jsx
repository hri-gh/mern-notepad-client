import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { NotesContextProvider } from './contexts/note-context.js'
import { AuthContextProvider } from './contexts/auth-context.js'
// import { createBrowserRouter, RouterProvider, } from "react-router-dom";

// Routes
// import Register from './routes/register.jsx'
// import Login from './routes/login.jsx'
// import { Navbar } from './components/navbar.jsx';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/register",
//     element: <Register />
//   },
//   {
//     path: "/login",
//     element: <Login />
//   },
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <NotesContextProvider>
        <App />
      </NotesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
