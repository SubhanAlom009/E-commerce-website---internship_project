import React from 'react'
import { useForm } from "react-hook-form"
import { motion } from 'framer-motion'

function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <motion.div 
    initial={{ opacity: 0, y: -1 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -1 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    className='flex items-center justify-center max-w-screen md:px-20'>
      <div className='w-full px-4 mt-24 mb-12 sm:mb-16 sm:w-2/3 md:px-20'>
          <div className="px-6 sm:px-12 py-4 sm:py-8 rounded-lg bg-[#e1e1e1] space-y-8 w-full ">
              <div className='flex items-center justify-center'>
                  <h3 className="text-2xl font-bold md:text-5xl">Contact Us</h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                  <label htmlFor="my_modal_1 " className="mb-8 space-y-1">
                      <p>Name</p>
                      <input {...register("text", { required: true })} type="text" name="text" placeholder="User name" className=" bg-[#e1e1e1] border rounded-lg border-gray-400 w-full p-2 input input-bordered" />
                      {errors.text && <span className='text-red-500'>This field is required</span>}
                  </label>
                  <label htmlFor="my_modal_1 " className="space-y-1">
                      <p>Email</p>
                      <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className=" bg-[#e1e1e1] border border-gray-400 rounded-lg w-full p-2 input input-bordered" />
                      {errors.email && <span className='text-red-500'>This field is required</span>}
                  </label>
                  <label htmlFor="my_modal_1 " className="flex flex-col space-y-1">
                      <p className='mt-8'>Message</p>
                      <textarea className='bg-[#e1e1e1] border p-4 border-gray-400 w-full rounded-lg' rows={5} name="message" minLength={100} {...register("message", { required: true })} ></textarea>
                      {errors.message && <span className='text-red-500'>This field is required</span>}
                  </label>
                  <input type='submit' value={"Send"} className='border cursor-pointer border-slate-400 px-4 py-2 rounded-lg duration-300 hover:bg-slate-300 mt-8 bg-[#e1e1e1]'/>

              </form>
              <div className="modal-action">
              </div>
          </div>
      </div>
     </motion.div> 
  )
}

export default Contact
