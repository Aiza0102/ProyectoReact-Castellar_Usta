import React, { useContext } from 'react';
import { listCartContext } from './ProviderContextoListCart';

const ButtonAddCart = ({ id, svg }) => {
    const { addProduct } = useContext(listCartContext);

    const handleClick = () => {
        addProduct(id);
    };

    return (
        <button id="addCart" onClick={handleClick}>
            <img src={svg} alt="add" />
        </button>
    );
};

export default ButtonAddCart;