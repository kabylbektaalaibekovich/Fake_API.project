import React, { useState } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom'
import { BsBookmarkFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useMainContext } from '../context/Maincontext';

const Prodcard = ({el}) => {
    const {favorite , cart , setCart ,addFavorite} = useMainContext()
    const nav = useNavigate()

    const someFav = favorite.some((some) => some.id === el.id);
    const basBtn = cart.some((bas) => bas.id === el.id);

 const addBasket = (data) => {
 data.quantity = 1
let bas = [... cart , data]
setCart(bas)
localStorage.setItem('cart' , JSON.stringify(bas))

    }
    return (
        
              <div>
                <div className="w-full    h-[600px] w-[300px]  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <Zoom>    
                <div className='flex items-center justify-center p-2'>
                <img
                className='w-full h-[400px] object-cover' // Установите фиксированную высоту
                src={el.image}
                alt={el.title}
                />
                </div>
                </Zoom>

                    
                <div className="px-5 pb-5  ">
                    <Link to ={ `/detal/${el.id}`}>
                        <h5 className="text-xl font-semibold tracking-tight  dark:text-white"><h3>{el.title }</h3></h5>
                    </Link>
                    <div className="flex items-center  mt-2 mb-4 ">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse ">
                            <svg className=" h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{el.rating.rate}</span>
                    </div>
                    <div class="flex items-center justify-between ">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white"><span>${el.price }</span></span>
                        <button onClick={ ()  => addFavorite(el) } className=' text-[25px]' style={{
                            color:  someFav ? 'red' : 'white'
                        }} ><BsBookmarkFill />                        </button>
                        <ToastContainer />
                          {
                        !basBtn ?  <button onClick={() => addBasket(el)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button> :
                        <button  onClick={()=> nav('/cart')} class="focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Go to cart</button>
                        
}
                    </div>

                </div>
            </div>
  </div>
    );
};

export default Prodcard;