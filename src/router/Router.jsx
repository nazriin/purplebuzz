import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import Contact from '../pages/Contact'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router