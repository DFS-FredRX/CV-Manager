import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import MainLayout from './layouts/MainLayout'

export default function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )

}
