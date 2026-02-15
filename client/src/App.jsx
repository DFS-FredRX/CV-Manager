import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Activation from './pages/Activation'
import Login from './pages/Login'

import './assets/styles/theme.css'

export default function App() {

  return (
    <Routes>
      <Route element={<MainLayout variant="default" />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>
      <Route element={<MainLayout variant="auth" />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<MainLayout variant="none" />}>
        <Route path='*' element={<NotFound />} />
        <Route path="/activation-success" element={<Activation />} />
      </Route>
    </Routes>
  )

}
