import React, { useState } from 'react';
import './Header.css';
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { useMainContext } from '../context/Maincontext';
import { IoMdMenu } from "react-icons/io";

const Header = () => {
    const { favorite, cart, value, setValue } = useMainContext();
    const navigate = useNavigate();
    const [isNavVisible, setIsNavVisible] = useState(false);

    const handleSearch = (e) => {
        setValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search/${value}`);
        }
    };

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header>
            <div className="container">
                <div className="header">
                    <Link to='/'><h1 className='liderFashion'>Lider Fashion</h1></Link>
                    <Link to='/man'><h2 className='men'>Men</h2></Link>
                    <Link to='/women'><h2 className='women'>Women</h2></Link>

                    <div className="head-input">
                        <input 
                            type="text" 
                            placeholder="What are you looking for?" 
                            onChange={handleSearch} 
                            onKeyDown={handleKeyPress} 
                        />
                        <button><CiSearch /></button>
                    </div>

<nav>
<div className="home">

<Link to='/home'>
    <button><FaHome /></button>
</Link>
<h6>Home</h6>
</div>

<div className="wishlist relative">
<Link to='/wishlist'>
    <button><IoMdHeartEmpty /></button>
</Link>
<h6>Wishlist</h6>
{favorite.length > 0 && (
    <span className='badge'>{favorite.length}</span>
)}
</div>

<div className="cart relative">
<Link to='/cart'>
    <button><IoCartOutline /></button>
</Link>
<h6>Cart</h6>
{cart.length > 0 && (
    <span className='badge1'>{cart.length}</span>
)}
</div>
</nav>
                    <button className='menuBtn' onClick={toggleNav}><IoMdMenu /></button>
                </div>

                {isNavVisible && (
                    <nav className="nav-menu">
                       <Link onClick={toggleNav} to='/man'>Men</Link>
                       <Link onClick={toggleNav} to='/women'> Women</Link>
                        <div className="home">

                            <Link to='/home'>
                                <button onClick={toggleNav}><FaHome /></button>
                            </Link>
                            <h6>Home</h6>
                        </div>

                        <div className="wishlist relative">
                            <Link to='/wishlist'>
                                <button onClick={toggleNav}><IoMdHeartEmpty /></button>
                            </Link>
                            <h6>Wishlist</h6>
                            {favorite.length > 0 && (
                                <span className='badge'>{favorite.length}</span>
                            )}
                        </div>

                        <div className="cart relative">
                            <Link to='/cart'>
                                <button onClick={toggleNav}><IoCartOutline /></button>
                            </Link>
                            <h6>Cart</h6>
                            {cart.length > 0 && (
                                <span className='badge1'>{cart.length}</span>
                            )}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
