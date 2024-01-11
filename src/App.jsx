import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './pages/home';
import Clothing from './pages/clothing';
import Electronics from './pages/electronics';
import Footer from './components/footer';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes> 
        <Route path="/" element={<Home />} />
          <Route path="/ropa" element={<Clothing />} />
          <Route path="/electronicos" element={<Electronics />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
