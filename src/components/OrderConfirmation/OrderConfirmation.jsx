import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext/CartContext';
import { motion } from "framer-motion";
import { TfiCheckBox } from "react-icons/tfi";
import { AddressContext } from '../../Context/AddressContext/AddressContext';

function OrderConfirmation() {


    const {cart, quantity} = useContext(CartContext)
    const findOrder = Math.floor(Math.random() * 1000)
    const { name, setName, email, setEmail, phone, setPhone, address, setAddress, country, setCountry } = useContext(AddressContext);


  return (
    <motion.div 
    animate={{ scale: 1 }}
    initial={{ scale: 0 }}
    transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1 }}
    className='flex justify-center w-full h-full mt-24 mb-16'>
        <div className='flex flex-col px-6 py-4 sm:px-12 sm:py-8 sm:w-1/2 mx-4 sm:mx-16 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
            <div>
                <label className='flex items-center mb-4'>
                    <div className='p-4 bg-green-500 rounded-full'>
                        <TfiCheckBox />
                    </div>
                    <h1 className='pl-2 font-mono text-xl font-bold'>Order Confirmed!</h1>
                </label>
                <h1 className='text-lg font-light'>Your order has been successfully placed.</h1>
                <h1 className='text-lg font-medium'>Order ID: #{findOrder}</h1>
            </div>
            <div className='px-2 py-4 mt-16 bg-gray-300 rounded-lg'>
            {
                cart.map((pd,index)=>{
                    return(
                        <div key={index} className='flex items-center justify-between pb-8'>
                            <div className='flex items-center gap-5'>
                                <div className='flex gap-5'>
                                    <h1 className='font-mono text-xl'>{pd.name}</h1>
                                    <h1>Quantity: {pd.quantity}</h1>
                                    <h1>Price: ₹ {pd.price}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <h1>Total: ₹ {cart.reduce((total, pd)=>{return total + pd.price * quantity},0)}</h1>
            </div>
            <div className='mt-8 space-y-3'>
                <h1 className='font-medium'>Shipping Address:</h1>
                <div className='space-y-2'>
                    <h1>Name: {name}</h1>
                    <h1>Email: {email}</h1>
                    <h1>Phone: {phone}</h1>
                    <h1>Address: {address}</h1>
                    {/* <h1>Country: {country}</h1> */}
                </div>
            </div>
            <div className='mt-8'>
                <h1 className='text-xl font-medium'>Thank you for shopping with us.</h1>
                <Link to={"/"}><h1 className='text-lg font-medium text-blue-500 hover:underline'>Continue Shopping</h1></Link>
            </div>
        </div>
    </motion.div>
  )
}

export default OrderConfirmation
