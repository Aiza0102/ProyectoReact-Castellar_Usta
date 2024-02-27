import React from 'react';
import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";
import ContainerCart from "./ContainerCart";
import ContextCart from "./ContextCart";

const NavBar = () => {
    return (
        <ContextCart>
            <header>
                <div className="containerBrand">
                    <Brand />
                </div>

                <nav className="containerItemList">
                    <ItemListContainer 
                        itemUno="Procesadores"
                        itemDos="Motherboards"
                        itemTres="Fuentes"
                        itemCuatro="Placas de video"
                    />
                
                <div className="containerCart">
                    <CartWidget />
                </div>
                </nav>
                <ContainerCart />
            </header>
        </ContextCart>
    );
}

export default NavBar;