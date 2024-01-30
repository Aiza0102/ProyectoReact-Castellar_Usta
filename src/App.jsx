import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/productdetail';
import Clothing from './pages/clothing';
import Electronics from './pages/Electronics';
import { CartProvider } from './components/cartcontext';
import Footer from './components/Footer';

const App = () => {
  const products = [];

  return (
    <Router>
      <CartProvider>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido" />} />
            <Route path="/ropa" element={<Clothing />} />
            <Route path="/electronicos" element={<Electronics />} />
            <Route path="/product/:id" element={<ProductDetail products={products} />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;