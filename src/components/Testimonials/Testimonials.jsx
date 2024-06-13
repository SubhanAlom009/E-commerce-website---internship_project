import React from 'react'
import { testimonials } from '../../constants/Constants'

function Testimonials() {
  return (
    <div>
        <div className='mt-20 tracking-wide'>
            <h2 className='my-10 font-sans text-3xl font-bold text-center sm:text-4xl lg:text-5xl lg:my-20'>What people are saying</h2>
            <div className='flex flex-wrap justify-center'>
                {testimonials.map((testimonial,index)=>(
                    <div key={index} className='w-full p-2 sm:w-1/2 lg:w-1/3'>
                        <div className='p-6 border rounded-md bg-neutral text-md border-neutral-800'>
                            <p>{testimonial.text }</p>
                            <div className='flex justify-center mt-4'>
                                <img className='w-12 h-12 mr-6 border rounded-full border-neutral-300' src={ testimonial.image } alt={ testimonial.user } />
                                <div>
                                    <h6>{ testimonial.user }</h6>
                                    <span className='text-sm italic font-normal text-neutral-600'>{ testimonial.company }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Testimonials
