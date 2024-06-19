import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios'
import toast from 'react-hot-toast'

function SignUp() {

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const navigate = useNavigate()

    const handleSubmit = async (event)=>{
        event.preventDefault();

        const userDetails = {
            fullname,
            email,
            password
        }

        try {
            const response = await axios.post("http://localhost:4000/user/register",userDetails)
            if(response.data){
                console.log("user details", response.data);
                toast.success(response.data.message);
                setTimeout(() => {
                    navigate("/login");
                }, 500);
                
            }
        } catch (error) {
            console.log("error:",error.response.data.message);
            toast.error(error.response.data.message);
        }
    }

  return (
    <div>
        <div className='flex items-center justify-center w-full h-screen pt-24 pb-12'>
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }} 
                className=' sm:w-1/2 mx-4 sm:mx-0 h-full flex flex-col items-center px-8 py-4 m-auto rounded-lg shadow-xl max-w-[550px] bg-[#ededed] text-[#333333] border border-[#CCCCCC]'>
                <div className='flex flex-col items-center'>
                    <h1 className='w-full mt-4 font-sans text-3xl font-medium text-center'>Register now as a  <i className='font-bold'>Tech Otaku!</i></h1>
                    <h1 className='w-full mt-4 font-mono text-3xl text-center'>Sign up</h1>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col w-full m-auto'>
                    <div className='flex flex-col mb-4 font-mono'>
                        <label className='mb-2'>Full name</label>
                        <input className='px-2 py-2 outline-none focus:border focus:border-[#CCCCCC] rounded-xl ' value={fullname} onChange={(e)=>setFullname(e.target.value)} name='fullname' type="text" placeholder='name' />
                    </div>
                    <div className='flex flex-col mb-4 font-mono'>
                        <label className='mb-2'>Email Address</label>
                        <input className='px-2 py-2 outline-none focus:border focus:border-[#CCCCCC] rounded-xl ' value={email} onChange={(e)=>setEmail(e.target.value)} name='email' type="email" placeholder='Email' />
                    </div>
                    <div className='flex flex-col mb-4 font-mono'>
                        <label className='mb-2'>Password</label>
                        <input className='px-2 py-2 outline-none focus:border focus:border-[#CCCCCC] rounded-xl' value={password} onChange={(e)=>setPassword(e.target.value)} name='password' type="password" placeholder='password' />
                    </div>
                    <button type="submit" className='w-full py-2 mt-8 font-mono text-lg font-semibold transition-all duration-200 bg-blue-500 hover:bg-blue-600 rounded-xl'>Sign up</button>
                </form>
                <p className='font-mono text-lg'>Already an user? <Link className='text-blue-700' to={'/login'}>Login</Link></p>
            </motion.div>
        </div>
    </div>
  )
}

export default SignUp
