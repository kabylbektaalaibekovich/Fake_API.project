import axios from 'axios';
import { useMainContext } from '../../context/Maincontext';
import Basketcart from './Basketcart';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css'
const Cart = () => {
    const [name , setName] = useState('')
    const [adress , setAdress] = useState('')
    const [phone  , setPhone] = useState('')
    const {cart} = useMainContext()
    const navigate = useNavigate()
    let sum = cart.reduce((acc , el) => {
        return  acc +  el.price * el.quantity
 
    },0)
    const submitTelegram = () => {
        const my_id = `-1002078502115`
        const token  = `7151248346:AAGT91yAdyHsHSnn_A6jwp3evO719Tbthig`;
        const url_api = `https://api.telegram.org/bot${token}/sendMessage`;


        const newProd = {
            chat_id: my_id,
            parse_model: 'html',
            text: `
            order: 
             name:${name}
            adress:${adress}
            phone:${phone}`
        }
        axios.post(url_api, newProd)
        setName('')
        setAdress('')
        setPhone('')
        
    }

    return (
  <div className="mt-[180px]">
<div className="container">
    
<div className="relative overflow-x-auto shadow-md sm:rounded-lg container">
    {
        cart.length ? (
            <table className="cart-table">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((el, idx) => <Basketcart el={el} key={idx} />)
                    }
                </tbody>
            </table>
        ) : (
            <div className='flex items-center justify-center flex-col'>
                <img className='w-[400px]' src="https://cdn2.iconfinder.com/data/icons/retail-shopping-and-sales/100/retails_cart_shopping_basket_empty_trolley-512.png" alt="" />
                <button onClick={() => navigate('/home')} type="button" className="submit-button">
                    To product catalog
                </button>
            </div>
        )
    }
</div>

<div className='flex items-center p-6'>
    <h1 className='text-2xl'>Итоговая цена : {sum}</h1>
</div>

<div className='submit-container'>
    <h1>Submit Telegram</h1>
    <div className="input-field">
        <label htmlFor="name">User name</label>
        <input onChange={(e) => setName(e.target.value)} type="text" id="name" />
    </div>
    <div className="input-field">
        <label htmlFor="address">User address</label>
        <input onChange={(e) => setAdress(e.target.value)} type="text" id="address" />
    </div>
    <div className="input-field">
        <label htmlFor="phone">User phone</label>
        <input onChange={(e) => setPhone(e.target.value)} type="text" id="phone" />
    </div>
    <button onClick={() => submitTelegram()} type="button" className="submit-button">Submit</button>
</div>

</div>
  </div>
    );
};

export default Cart;