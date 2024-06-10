import React from 'react'
import { Link } from 'react-router-dom'
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className='bg-[#0a1a3d] text-[#F5F5F5]'>
      <div className='flex gap-5 px-20 py-10'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl font-bold text-white'>TechTrove</h1>
          <p className='w-[80%]'>At TechTrove, we believe in staying ahead of the curve by constantly updating our inventory with the latest advancements in technology. Our team of experts carefully selects each product to ensure it meets our high standards of quality and innovation. We are committed to providing our customers with the best possible shopping experience.</p>
        </div>
        <div className='flex flex-col w-full gap-5'>
          <h1 className='text-lg font-bold'>Company</h1>
          <ul className='space-y-2'>
            <Link><li className='hover:underline underline-offset-2'>Terms</li></Link>
            <Link><li className='my-2 hover:underline underline-offset-2'>Privacy policy</li></Link>
            <Link><li className='hover:underline underline-offset-2'>Help and support</li></Link>
          </ul>
        </div>
        <div className='flex flex-col w-full gap-5'>
          <h1 className='text-lg font-bold'>Useful Links</h1>
          <ul className='space-y-2'>
            <li className='hover:underline underline-offset-2'>
                <Link to='/'>Home</Link>
            </li>
            <li className='hover:underline underline-offset-2'>
                <Link to="/shop">Shop</Link>
            </li>
            <li className='hover:underline underline-offset-2'>
                <Link to='/about'>About</Link>
            </li>
            <li className='hover:underline underline-offset-2'>
                <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col w-full gap-5'>
          <h1 className='text-lg font-bold'>Contact</h1>
          <p>123 Main Street</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: 6YJpH@example.com</p>
          <div className='flex flex-col w-full gap-2'>
            <h1 className='text-lg font-bold'>Follow Us</h1>
            <div className='flex flex-grow space-x-3 text-3xl'>
              <Link to={"https://r.com/home"} target='_blank'><RiTwitterXLine /></Link>
              <Link to={"https://www.facebook.com/"} target='_blank'><FaFacebookF /></Link>
              <Link to={"https://www.instagram.com"} target='_blank'><FaInstagram /></Link>
              <Link to={"https://www.linkedin.com/"} target='_blank'><FaLinkedinIn /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center h-16 text-white'>
        <p>Copyright © TechTrove - 2024</p>
      </div>
    </footer>
  )
}

export default Footer
