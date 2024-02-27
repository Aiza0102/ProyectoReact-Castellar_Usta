import React, { useContext } from 'react';
import '../styles/index.css';
import close from '../assets/close.svg';
import ItemCart from './ItemCart';
import clear from '../assets/clear.svg';
import { controllerShowCart } from './ContextCart';
import { listCartContext } from '../components/ProviderContextoListCart';

const ContainerCart = () => {
    const { cartShow, setCartShow } = useContext(controllerShowCart);
    const { listCart, clearCart } = useContext(listCartContext);

    const style = {
        display: cartShow
    };

    const closeCart = () => {
        setCartShow(cartShow === 'none' ? 'flex' : 'none');
    };

    return (
        <div className="cart" style={style}>
            <div className="cerrar">
                <button className="close" onClick={closeCart}>
                    <img src={close} alt="close" />
                </button>
            </div>

            <div className="containerItemsCart">
                {listCart.length === 0 ? (
                    <span className="emptyCart">Tu carrito está vacío, ¡llénalo!</span>
                ) : (
                    listCart.map((producto) => (
                        <ItemCart
                            key={producto.id}
                            id={producto.id}
                            title={producto.title}
                            image={producto.imageProduct.firtsImage}
                            quantity={producto.quantity}
                            price={producto.price}
                        />
                    ))
                )}
            </div>

            <div className="TerminarCompra">
                <button className="terminar">Terminar compra</button>
                <button className="clear" onClick={clearCart}>
                    <img src={clear} alt="clear" />
                </button>
            </div>
        </div>
    );
};

export default ContainerCart;