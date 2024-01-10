import React from 'react'
import "./App.scss"
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts'
import Home from './pages/Home'
import Add from './pages/Add'
import Detail from './pages/Detail'
import BasketProvider from './context/BasketContext'
import WishlistProvider from './context/WishlistContext'
import Basket from './pages/Basket'

const App = () => {
  return (
    <>
      <BasketProvider>
        <WishlistProvider>
          <Routes>
            <Route path='/' element={<MainLayout/>}>
              <Route index element={<Home />} />
              <Route path='/add' element={<Add />} />
              <Route path='/:id' element={<Detail />} />
              <Route path='/basket' element={<Basket />} />
            </Route>
        </Routes>
        </WishlistProvider>
      </BasketProvider>
    </>
  )
}

export default App