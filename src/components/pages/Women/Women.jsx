import React from 'react';
import { useMainContext } from '../../context/Maincontext';
import Prodcard from '../../Prodcard/Prodcard';

const Women = () => {
    const { product } = useMainContext();

    const womenClothing = product.filter((el) => el.category === "women's clothing");
    return (
        <div className='mt-[200px]'>
            <div className='container'>
                <div className='flex items-center justify-center flex-wrap gap-[40px] '>
                    {womenClothing.map((el, idx) => (
                        <Prodcard el={el} key={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Women;