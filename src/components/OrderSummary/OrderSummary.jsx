import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext/CartContext'
import { AddressContext } from '../../Context/AddressContext/AddressContext';

function OrderSummary() {

    const {cart, quantity} = useContext(CartContext)
    const { name, setName, email, setEmail, phone, setPhone, address, setAddress, country, setCountry } = useContext(AddressContext);
    
    const navigate = useNavigate();  


    const scrollToTop = ()=>{
        window.scrollTo({
          top:0,
          behavior: 'smooth'
        })
      }

    const handleAddress = () => {
        if (!name || !email || !phone || !address) {
            return alert("Please fill the address form");
        } else {
            console.log(name, email, phone, address, country);
            navigate("/order-confirmation");
            scrollToTop();
        }
    };

    

  return (
    <div className='flex flex-col p-4'>
        <h1 className='mb-4 font-sans text-2xl font-bold'>Order Summary</h1>
        <div>
        <div className='px-4 py-2 mb-12'>
            <p className='font-mono text-sm'>Have a promo code?</p>
            <div className='flex items-center'>
                <input className='bg-[#d9f4ff] w-full h-[48px] my-2 border-2 border-slate-500 rounded-l-lg px-4 py-2' placeholder='Enter promo' type="text" />
                <label className='px-4 py-3 text-white transition-all duration-200 bg-blue-600 rounded-r-lg cursor-pointer hover:bg-blue-700' htmlFor="promo">Apply</label>
            </div>
        </div>
        <div className='px-4 py-2 space-y-2'>
            {
                cart.map((pd,index)=>{
                    return(
                        <div key={index} className='flex items-center justify-between pb-8'>
                            <div className='flex flex-col gap-5 sm:items-center sm:flex-row'>
                                <img className='w-[150px] rounded-xl' src={pd.image} alt="" />
                                <div>
                                    <h1 className='font-mono text-xl'>{pd.name}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <h1 className='font-sans text-xl font-medium'>Total items: {cart.length}</h1>
            <h1 className='text-xl font-medium'>Subtotal: {cart.reduce((total, pd)=>{return total + pd.price * pd.quantity},0)}</h1>
            <h1 className='text-xl font-medium'>discount: ₹ 0</h1>
            <h1 className='text-xl font-medium'>Total price: {cart.reduce((total, pd)=>{return total + pd.price * pd.quantity},0)}</h1>
            <Link><button onClick={handleAddress} className='w-full px-4 py-2 mt-12 text-xl font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700'>Pay Now</button></Link>
        </div>
        </div>
    </div>
  )
}

export default OrderSummary
