import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap"

import Header from "./components/Header"
import Users from './components/Users';
import Feedback from './components/Feedback'
import Home from './components/Home';

//MIT 2025.2
import Tema from './components/Tema'
import { ThemeProvider } from './hooks/ThemeContext';
import Data from './components/Data/Data';
import UserAxios from './components/UsersAxios';
import StateStudy from './components/Data/StateStudy';
import Icons from './components/Icons';
import Store from './components/Store'
import { CartProvider } from './hooks/CartContext';


function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className='d-flex flex-column' style={{minHeight: "100vh"}}>
            <Header/>
            <Container className='flex-grow-1'>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/feedback' element={<Feedback/>}/>
                <Route path='/data' element={<Data/>}/>
                <Route path='/users-axios' element={<UserAxios/>}/>
                <Route path='/state-study' element={<StateStudy/>}/>
                <Route path='/icons' element={<Icons/>}/>
                <Route path='/store' element={<Store/>}/>
                <Route path='/tema' element={<Tema/>}/>
              </Routes>
            </Container>
            <footer className='bg-dark text-white text-center p-3'>
              INFNET -MIT FULL STACK 2025
            </footer>
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
