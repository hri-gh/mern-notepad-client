// import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


// Routes
import Register from './routes/register.jsx'
import Login from './routes/login.jsx'
import { Navbar } from './components/navbar.jsx';
import Home from './routes/home.jsx';


import { useAuthContext } from './hooks/use-auth-context.js';

function App() {

  const { user } = useAuthContext();


  return (
    <>

      <BrowserRouter>
        <Navbar />
        <div className="container p-2">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
