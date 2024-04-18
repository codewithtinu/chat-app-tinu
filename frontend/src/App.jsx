import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css'
import { AuthContextProvider } from "./context/AuthContext.jsx";

import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext';

function App() {

  const {authUser} = useAuthContext();

  return (
    <>
      <div className='w-full h-screen flex items-center justify-center'>
          <Routes>
            <Route path='/' element={authUser ? <Home /> : <Navigate to ="/login" />} />
            <Route path='/login' element={authUser ? <Navigate to = "/" /> : <Login />} />
            <Route path='/signup' element={authUser ? <Navigate to = "/" /> : <Signup />} />
          </Routes>
          <Toaster/>
      </div>
    </>
  )
}

export default App
