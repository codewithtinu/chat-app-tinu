import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

function App() {

  return (
    <>
      <div className='w-full h-screen flex items-center justify-center'>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
