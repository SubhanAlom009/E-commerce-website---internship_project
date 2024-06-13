import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function SignUp() {
  return (
    <div>
        <div className='w-full h-screen pt-24 pb-12'>
            <motion.div
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1 }} 
                className=' sm:w-1/2 mx-4 sm:mx-0 h-full flex flex-col items-center px-8 py-4 m-auto rounded-lg shadow-xl max-w-[550px] bg-gradient-to-br from-cyan-200 to-sky-500'>
                <div className='flex flex-col items-center'>
                    <h1 className='w-full mt-4 font-sans text-3xl font-medium text-center'>Register now as a  <i className='font-bold'>Tech Otaku!</i></h1>
                    <h1 className='w-full mt-4 font-mono text-3xl text-center'>Sign up</h1>
                </div>
                <form className='flex flex-col w-full m-auto'>
                    <div className='flex flex-col mb-4 font-mono'>
                        <label className='mb-2'>Full name</label>
                        <input className='px-2 py-2 outline-none focus:border focus:border-blue-700 rounded-xl ' type="text" placeholder='name' />
                    </div>
                    <div className='flex flex-col mb-4 font-mono'>
                        <label className='mb-2'>Email Address</label>
                        <input className='px-2 py-2 outline-none focus:border focus:border-blue-700 rounded-xl ' type="email" placeholder='Email' />
                    </div>
                    <div className='flex flex-col mb-4 font-mono'>
                        <label className='mb-2'>Password</label>
                        <input className='px-2 py-2 outline-none focus:border focus:border-blue-700 rounded-xl' type="password" placeholder='password' />
                    </div>
                    <button className='w-full py-2 mt-8 font-mono text-lg font-semibold transition-all duration-200 bg-blue-500 hover:bg-blue-600 rounded-xl' type='submit'>Sign up</button>
                </form>
                <p className='font-mono text-lg'>Already an user? <Link className='text-blue-700' to={'/login'}>Login</Link></p>
            </motion.div>
        </div>
    </div>
  )
}

export default SignUp
