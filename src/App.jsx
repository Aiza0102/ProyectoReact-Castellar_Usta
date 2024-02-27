import React from 'react';
import './styles/index.css';
import NavBar from './pages/navbar';
import ContainerCardItems from './components/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from './components/DetailsItem';
import { ProviderContextoListCart } from './components/ProviderContextoListCart';
import Footer from './pages/footer';

function App() {
  return (
    <ProviderContextoListCart>
      <BrowserRouter>
        <NavBar />
        <div style={{ marginTop: '120px' }}></div>
          <Routes>
            <Route path='/' element={<ContainerCardItems />} />
            <Route path='/item/:idItem' element={<DetailsItem />} />
            <Route path='/category/:idCategory' element={<ContainerCardItems />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </ProviderContextoListCart>
  );
}

export default App;