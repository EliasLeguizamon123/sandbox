import Home from '@/pages/Home'
import Login from '@/pages/Login'
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Home />} index />
        <Route element={<Login />} path='/login' />
      </Routes>
    </HashRouter>
  )
}

export default Router