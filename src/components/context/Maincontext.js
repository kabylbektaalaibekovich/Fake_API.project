import { createContext, useContext, useEffect, useState } from "react";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
const useMain = createContext();
export const useMainContext = () => useContext(useMain);


const Maincontext = ({children}) => {
    const [favorite , setFavorite] = useState([])
    const[product , setProduct] = useState([]);
    const [cart , setCart] = useState([])
    const [btn , setBtn] = useState(false)
    const [value , setValue] = useState('')
function getData(){
    let resFav = JSON.parse(localStorage.getItem('store')) || []
    let res = JSON.parse(localStorage.getItem('cart' ) ) || []
    setFavorite(resFav)
    setCart(res)
}

useEffect(() => {
    getData()
},[])

const addFavorite = (data) => {
    let findProd = favorite.find(el => el.id === data.id);
    if (findProd) {
        let filtProd = favorite.filter((el) => el.id !== data.id);
        setFavorite(filtProd);
        localStorage.setItem('store', JSON.stringify(filtProd));
        erorSms('Продукт удален');  // Вызов функции с сообщением
    } else {
        let res = [...favorite, data];
        setFavorite(res);
        localStorage.setItem('store', JSON.stringify(res));
    }
};

const erorSms = (message) => {
    toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
};

    let values = {
product,
setProduct,
favorite ,
 setFavorite,
 addFavorite,
 cart, 
 setCart,
 btn,
 value,
 setValue,
    }
    return (
    <useMain.Provider value={values}>
        {children}
        </useMain.Provider>
       
    );
};

export default Maincontext;