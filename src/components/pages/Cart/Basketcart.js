import React from 'react';
import { MdDelete } from "react-icons/md";
import { useMainContext } from '../../context/Maincontext';
import './Cart.css';

const Basketcart = ({ el }) => {
    const { cart, setCart } = useMainContext();

    const increment = (data) => {
        let changeBas = cart.map((el) => el.id === data.id ? { ...el, quantity: el.quantity + 1 } : el);
        setCart(changeBas);
        localStorage.setItem('cart', JSON.stringify(changeBas));
    };

    const decrement = (data) => {
        let changeBas = cart.map((el) => el.id === data.id ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 } : el);
        setCart(changeBas);
        localStorage.setItem('cart', JSON.stringify(changeBas));
    };

    const delCart = (data) => {
        let delData = cart.filter((el) => el.id !== data.id);
        setCart(delData);
        localStorage.setItem('cart', JSON.stringify(delData));
    };

    return (
        <tr className="table-row">
            <th scope="row" className="table-cell">
                <img src={el.image} width={150} alt="" />
            </th>
            <td className="table-cell">{el.title.slice(0, 20)}</td>
            <td className="table-cell quantity-control">
                <button onClick={() => decrement(el)}>-</button>
                {el.quantity}
                <button onClick={() => increment(el)}>+</button>
            </td>
            <td className="table-cell">${el.price * el.quantity}</td>
            <td className="table-cell">
                <button onClick={() => delCart(el)} className="delete-button">
                    <MdDelete />
                </button>
            </td>
        </tr>
    );
};

export default Basketcart;
