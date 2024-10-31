import React, { useEffect, useState } from 'react';
import './Man.css'
import { useMainContext } from '../../context/Maincontext';
import axios from 'axios';
import Prodcard from '../../Prodcard/Prodcard';
const Man = () => {
    const { product } = useMainContext();
    const menClothing = product.filter((el) => el.category === "men's clothing");
  
    return (
        <div className='mt-[200px]'>
        <div className='container'>
            <div className='flex items-center justify-center flex-wrap gap-[40px] '>
                {menClothing.map((el, idx) => (
                    <Prodcard el={el} key={idx} />
                ))}
            </div>
        </div>
    </div>
    );
};

export default Man;