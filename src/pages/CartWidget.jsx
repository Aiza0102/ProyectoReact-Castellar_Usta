import React, { useContext } from 'react';
import cart from '../assets/cart.svg';
import { listCartContext } from '../components/ProviderContextoListCart';
import { controllerShowCart } from './ContextCart';

const CartWidget = () => {
    const { setCartShow, cartShow } = useContext(controllerShowCart);
    const { listCart } = useContext(listCartContext);

    const showCart = () => {
        setCartShow(cartShow === 'none' ? 'flex' : 'none');
    };

    return (
        <div className="containerLength" onClick={showCart}>
            <img src={cart} alt="cart" />
            <span className="cantCart">{listCart.length}</span>
        </div>
    );
};

export default CartWidget;