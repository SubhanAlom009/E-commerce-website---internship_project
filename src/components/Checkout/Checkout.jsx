import React from 'react'
import Payment from '../Payment/Payment'
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Address from '../Address/Address';
import OrderSummary from '../OrderSummary/OrderSummary';


function Checkout() {
  return (
    <div className='flex flex-col items-center mx-12 mt-20 mb-8'>
      <div className='flex flex-col shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] h-full pb-12 w-full'>
        <div>
            <div className='flex items-center py-2 pl-8'>
                <IoShieldCheckmarkOutline/>
                <h1 className='pl-2 font-mono text-xl font-bold'>Check Out</h1>
            </div>
            <div className='w-full border border-grey-300'></div>
        </div>
        <div className='flex flex-col sm:mx-12 sm:flex-row '>
            <div className='flex flex-col w-full'>
                <div>
                    <Payment/>
                </div>
                <div>
                    <Address/>
                </div>
            </div>
            <div className='px-4 sm:py-2 sm:min-h-1/2 bg-[#F6F7FB] mt-8 sm:w-1/3 rounded-lg'>
                <OrderSummary/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
