import "../styles/index.css";
import deleteWhite from "../assets/deleteWhite.svg";
import { useContext } from "react";
import { listCartContext } from "../components/ProviderContextoListCart";

const ItemCart = ({ id, title, image, price, quantity }) => {
    const { removeFromCart } = useContext(listCartContext);
    return (
        <div className="itemCart">
            <div className="img">
                <img src={image} alt="product"></img>
            </div>
            <div className="description-cantidad">
                <span className="title">{title}</span>
                <span className="quantity">{`cantidad: ${quantity}`}</span>
            </div>
            <div className="price">
                <span className="subtotal">Subtotal</span>
                <span className="price">${price * quantity}</span>
            </div>
            <button className="delete" onClick={() => removeFromCart(id)}>
                <img src={deleteWhite} alt="delete"></img>
            </button>
        </div>
    );
};

export default ItemCart;