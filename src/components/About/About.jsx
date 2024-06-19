import React from 'react'
import Testimonials from '../Testimonials/Testimonials'
import { aboutUs } from '../../constants/Constants'
import hero from '../../assets/hero.jpg'
import mission from '../../assets/mission.jpg'
import { motion } from 'framer-motion'

function About() {
  
  return (
    <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    className='flex flex-col items-center px-4 py-8 mx-8 mt-24 space-y-6 bg-[#F5F5F5]'>
      <div className='w-2/3 space-y-4 font-sans text-center'>
        <h1 className='text-4xl font-bold'>About Us</h1>
        <img src={hero} alt="here" />
        <p className='text-lg'>{aboutUs.about}</p>
      </div>
      <div className='w-2/3 space-y-4 font-sans text-center'>
        <h1 className='text-4xl font-bold'>Our Team</h1>
        <p className='text-lg'>{aboutUs.team}</p>
      </div>
      <div className='w-2/3'>
        <Testimonials/>
      </div>
      <div className='w-2/3 space-y-4 font-sans text-center'>
        <h1 className='text-4xl font-bold'>Our Mission</h1>
        <img src={mission} alt="here" />
        <p className='text-lg'>{aboutUs.mission}</p>
      </div>
    </motion.div>
  )
}

export default About
