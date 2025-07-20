import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Shop from './pages/Shop';
import LoginForm from './pages/LoginForm';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/loginform" element={<LoginForm />} />
      </Routes>
    </Router>
  )
}

export default App;