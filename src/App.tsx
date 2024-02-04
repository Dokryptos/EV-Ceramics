import { Route, Routes } from 'react-router-dom'
import './App.css'

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Shop } from './pages/Shop';
import { Archives } from './pages/Archives';
import { Collections } from './pages/Collections';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Shop' element={<Shop/>} />
        <Route path='/Archives' element={<Archives/>} />
        <Route path='/Collections' element={<Collections/>} />
      </Routes>
    </>
  )
}

export default App
