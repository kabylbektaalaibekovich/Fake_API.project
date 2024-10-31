// Detal.js

import React, { useState } from 'react';
import './Detal.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useMainContext } from '../../context/Maincontext';
import { IoCartOutline } from "react-icons/io5";

const Detal = () => {
    const { product, cart, setCart, addFavorite } = useMainContext();
    const { proId } = useParams();
    const navigate = useNavigate();
    let findProd = product.find((el) => el.id === +proId);
    const [isInCart, setIsInCart] = useState(false);

    const addBasket = (data) => {
        let bas = [...cart, data];
        setCart(bas);
        localStorage.setItem('cart', JSON.stringify(bas));
        setIsInCart(true);
    };

    const handleCartButtonClick = () => {
        if (isInCart) {
            navigate('/cart');
        } else {
            addBasket(findProd);
        }
    };

    return (
        <div className="detal-container">
            <div className="detal-content">
                <img className="detal-image" src={findProd.image} alt="" />
                <div className="detal-info">
                    <h5 className="detal-title">{findProd.title.slice(0, 20)}</h5>
                    <p className="detal-description">{findProd.description}</p>
                    <div className="detal-actions">
                        <span className="detal-rating">{findProd.rating.rate}</span>
                        <span className="detal-price">${findProd.price}</span>
                        <button className="detal-cart-btn" onClick={handleCartButtonClick}>
                            <IoCartOutline />
                        </button>
                        <button onClick={() => addFavorite(findProd)} className="detal-favorite-btn"></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detal;
