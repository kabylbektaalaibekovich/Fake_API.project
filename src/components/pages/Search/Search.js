import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMainContext } from '../../context/Maincontext';
import { IoCartOutline } from "react-icons/io5";
const Seacrh = () => {
    const nav = useNavigate()
    const {proName} = useParams()
    const {product} = useMainContext()
     const getSeacrh = product.find(el => el.title = proName)
     let  {title, image , price , description } = getSeacrh
    return (
        <div className='container'>
            <div>
{
<div className='flex gap-[20px]  mt-[200px]'>
    
<img class="w-[300px]" src={image} alt=""/>

<div class="mt-[50px] p-4">
    <h5 className="text-3xl font-bold   ">{title.slice(0,20)}</h5>
    <div className='mt-[50px]'>
  <p className='w-[500px] text-2xl mt-[10px] '>{description}</p>

    </div>
<div className='mt-[100px]  flex items-center   gap-[20px]'>

<span className='text-3xl '>${price}</span>
  <button className='text-4xl' onClick={() => nav('/home') }><IoCartOutline /></button>
</div>
</div>
</div>
}
            </div>
        </div>
    );
};

export default Seacrh;