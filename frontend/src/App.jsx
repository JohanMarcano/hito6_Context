import React from 'react';
import MyNavbar from './components/MyNavbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Pizza from './pages/Pizza';
import RegisterPage from './pages/RegisterPage'; 
import LoginPage from './pages/LoginPage'; 
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import { CartProvider } from './components/CartContext'; // Importar el CartProvider

const App = () => {
  return (
    <CartProvider> {/* Envolver toda la app con el provider */}
      <div> 
        <MyNavbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/p001' element={<Pizza />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
