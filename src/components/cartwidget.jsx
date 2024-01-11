import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
const [isCartOpen, setCartOpen] = useState(false);
const itemCount = 2;

const handleCartToggle = () => {
    setCartOpen(!isCartOpen);
};

return (
    <div className="cart-widget" onClick={handleCartToggle}>
    <FaShoppingCart className="cart-icon" />
    {itemCount > 0 && <span className="cart-number">{itemCount}</span>}
    {isCartOpen && (
        <div className="cart-modal">
          {/* Contenido del carrito */}
            <p>Producto 1 - $10</p>
            <p>Producto 2 - $20</p>
        </div>
    )}
    </div>
    );
};

export default CartWidget;