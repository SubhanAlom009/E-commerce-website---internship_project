import React from 'react'
import { RiPaypalFill } from "react-icons/ri";
import { FaGooglePay } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import { FaApplePay } from "react-icons/fa";
import upi from '../../assets/images/upi.png'

function PaymentSelector({ selectedMethod, onSelectMethod }) {
  const paymentMethods = [
    { name: 'Paypal', icon: RiPaypalFill },
    { name: 'Google pay', icon: FaGooglePay },
    { name: 'Razor pay', icon: SiRazorpay },
    { name: 'Apple pay', icon: FaApplePay }
  ];

  return (
    <div className="flex">
      <div className='flex p-4 space-x-4'>
        <div className='flex flex-col px-2 py-4 '>
          <h1 className='mb-8 text-4xl font-bold '>Payment Method</h1>
          <div className='space-y-4'>
            <div className='flex items-center'>
              <img src={upi} alt="upi" />
              <label className='text-lg font-bold'>UPI Options</label>
            </div>
            {
              paymentMethods.map((method, index) => {
                return (
                  <div key={index} onClick={() => onSelectMethod(method.name)} className='flex cursor-pointer hover:bg-[#7ab2f3] transition-all duration-200 items-center gap-2 px-2 py-2 border-2 bg-[#d9f4ff] border-slate-400 rounded-xl'>
                    <input
                      className='w-4 h-4'
                      type="radio"
                      value={method.name}
                      checked={selectedMethod === method.name}
                      onChange={() => onSelectMethod(method.name)}
                    />
                    <method.icon />
                    <label className='ml-1 font-bold'>{method.name}</label>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSelector
