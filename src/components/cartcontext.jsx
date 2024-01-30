import React, { createContext, useContext, useReducer } from 'react';


const ADD_TO_CART = 'ADD_TO_CART';


const cartReducer = (state, action) => {
switch (action.type) {
    case ADD_TO_CART:
    return {
        ...state,
        items: [...state.items, action.payload],
    };
    default:
    return state;
    }
};

const initialCartState = {
items: [],
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

const addToCart = (product) => {
    dispatch({
    type: ADD_TO_CART,
    payload: product,
    });
};

return (
    <CartContext.Provider value={{ cart: cartState, addToCart }}>
    {children}
    </CartContext.Provider>
    );
};

export const useCart = () => {
const context = useContext(CartContext);
    if (!context) {
    throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};