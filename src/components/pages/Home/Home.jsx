


import React, { useEffect, useState } from 'react';
import './Home.css'
import axios from 'axios';
import 'react-medium-image-zoom/dist/styles.css'
import { useMainContext } from '../../context/Maincontext';
import Prodcard from '../../Prodcard/Prodcard';


const Home = () => {
// const [more , setMore] = useState(3)

const {product , setProduct , value} = useMainContext()


    const getStore =  async () => {
       const res = await axios('https://fakestoreapi.com/products/');
       const {data}= await res
       setProduct(data)
         }
      

    useEffect(() => {
        getStore()
    },[])
const filtSearch = value.length > 0 ? product.filter(el => el.title .toLowerCase().includes(value.toLowerCase())) :
product

    return (

       <div className='mt-[200px]'>
        <div className='container'>
            <div className='flex items-center justify-center flex-wrap gap-[40px] '>
{
    filtSearch.map((el, idx) => <Prodcard  el={el} key={idx}/>)
}

       </div>

       </div>
<div className='flex items-center justify-center'>
{/* <button className='moreBtn' onClick={() =>  setMore(more + 3)}>More</button> */}

</div>
       </div>

  
    );
};

export default Home;