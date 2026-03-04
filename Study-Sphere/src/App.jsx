import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Analytics from './pages/Analytics'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Focus from './pages/Focus'
import KanbanBoard from './pages/KanbanBoard'
import Login from './pages/Login'
import Vault from './pages/Vault'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/analytics' element={<Analytics/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/error' element={<Error/>}/>
        <Route path='/focus' element={<Focus/>}/>
        <Route path='/kanbanboard' element={<KanbanBoard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/vault' element={<Vault/>}/>
      </Routes>
    </div>
  )
}

export default App

