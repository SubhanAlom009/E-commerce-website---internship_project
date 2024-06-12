import React, { useState,useContext } from 'react'
import { AddressContext } from '../../Context/AddressContext/AddressContext'

function Address() {   
    
    const {name, setName, email, setEmail, phone, setPhone, address, setAddress, country, setCountry, handleAddress} = useContext(AddressContext)

  return (
    <div className='mt-4 '>
      <h1 className='ml-8 font-sans text-xl font-bold'>Shipping Address</h1>
      <form className='flex flex-col mt-8 ml-8 space-y-4'>
        <div>
            <h1 className='font-serif text-lg'>Name</h1>
            <input placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} className='w-1/2 px-2 py-2 border-2 border-slate-400 rounded-xl' type="text" />
        </div>
        <div>
            <h1 className='font-serif text-lg'>Email</h1>
            <input placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-1/2 px-2 py-2 border-2 border-slate-400 rounded-xl' type="text" />
        </div>
        <div>
            <h1 className='font-serif text-lg'>Phone</h1>
            <input placeholder='1234567890' value={phone} onChange={(e)=>setPhone(e.target.value)} className='w-1/2 px-2 py-2 border-2 border-slate-400 rounded-xl' type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required  />
        </div>
        <div>
            <h1 className='font-serif text-lg'>Country</h1>
            <select name="countries" className='w-1/2 px-2 py-2 border-2 border-slate-400 rounded-xl'>
                <option value="India" default>India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
            </select>
        </div>
        <div>
            <h1 className='font-serif text-lg'>Address</h1>
            <textarea placeholder='Enter Address' value={address} onChange={(e)=>setAddress(e.target.value)} className='w-1/2 px-2 py-2 border-2 border-slate-400 rounded-xl' type="text" ></textarea>
        </div>
      </form>
    </div>
  )
}

export default Address
