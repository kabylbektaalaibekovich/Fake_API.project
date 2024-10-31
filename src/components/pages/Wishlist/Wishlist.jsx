import React from 'react';
import { useMainContext } from '../../context/Maincontext';
import emptyFav  from'../../../images/empty.jpg'
import { useNavigate } from 'react-router-dom';
const Whilits = () => {
    const {favorite , setFavorite} = useMainContext()
    const navigate = useNavigate()
    const removeAll = () => {
setFavorite([])
localStorage.removeItem('store')
    }
    return (
    
<div className='mt-[200px]'>
    <div className="container">
{ favorite.length ? (
    <div className='flex items-end justify-between'>
           <div className='flex flex-col gap-5 h-[600px] overflow-scroll'>
    {
        favorite.map((el) => (
            <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={el.image} alt=""/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.title}</h5>
            </div>
        </a>
        ))
    }
    </div> 
    <button onClick={() => removeAll()} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove All</button>

    </div>
  ): (
   <div className='flex items-center justify-center flex-col'>
     <img className='w-[400px] bg-white-100' src='https://cdn4.iconfinder.com/data/icons/shopping-423/24/wishlist-512.png' alt="EMPTY !!" />
     <h1 className='text-[30px]'>WIshlist is empty</h1>
     <button onClick={() => navigate('/home')} type="button" class="text-white my-5 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
     <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
     To product catalog</button>

   </div>
)}
    </div>
</div>

    );
};

export default Whilits;