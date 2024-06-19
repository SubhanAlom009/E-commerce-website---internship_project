import React, { useEffect, useState } from 'react'
import { products } from '../../constants/Constants';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { motion } from 'framer-motion';

function Products() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [selectedPriceRange, setSelectedPriceRange] = useState(null)


  if (!products) {
    return <div>Product not found</div>;
  }

  const toggleCategory = (category)=>{
    setSelectedCategory(selectedCategory === category ? null: category)
  }
  const toggleBrand = (brand)=>{
    setSelectedBrand(selectedBrand === brand ? null : brand)
  }

  const togglePriceRange = (price)=>{
    setSelectedPriceRange(selectedPriceRange === price ? null : price)
  }

  const filterProduct = products.filter((product)=>{
    return (
      (product.category == selectedCategory) ||
      (product.brand == selectedBrand) ||
      (selectedPriceRange === 'Less than 10000' && product.price < 10000) ||
      (selectedPriceRange === '10000 to 20000' && product.price >= 10000 && product.price <= 20000) ||
      (selectedPriceRange === '20000 to 50000' && product.price >= 20000 && product.price <= 50000) ||
      (selectedPriceRange === 'More than 50000' && product.price > 50000) 
    )
  })

  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = ()=>{
    if(window.scrollY > 400){
      setIsVisible(true)
    } else
    {
      setIsVisible(false)
    }
  }

  const scrollToTop = ()=>{
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }

  useEffect(()=>{
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  },[])



  return (
    <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    className='flex flex-col justify-between gap-10 mx-8 mt-24 mb-12 sm:flex-row'>
      <div className='flex sm:flex-col gap-4 p-5 border-b sm:border-r border-slate-400 min-w-[200px]'>
        <div className='space-y-3'>
          <h1 className='text-lg font-semibold'>Categories</h1>
          <ul>
            {/* Add tick boxes..... better looking!! */}
            <Link onClick={()=> toggleCategory('Computing Devices')} className={`${selectedCategory === 'Computing Devices'? 'underline': ''} text-blue-400 underline-offset-4 cursor-pointer hover:underline`}><li>Computing Devices</li></Link>
            <Link onClick={()=> toggleCategory('Mobile Devices')} className={`${selectedCategory === 'Mobile Devices'? 'underline': ''} text-blue-400 underline-offset-4 cursor-pointer hover:underline`}><li>Mobile Devices</li></Link>
            <Link onClick={()=> toggleCategory('Wearable Technology')} className={`${selectedCategory === 'Wearable Technology'? 'underline': ''} text-blue-400 underline-offset-4 cursor-pointer hover:underline`}><li>Wearable Technology</li></Link>
            <Link onClick={()=> toggleCategory('Audio & Music Devices')} className={`${selectedCategory === 'Audio & Music Devices'? 'underline': ''} text-blue-400 underline-offset-4 cursor-pointer hover:underline`}><li>Audio & Music Devices</li></Link>
            <Link onClick={()=> toggleCategory('Smart Home Devices')} className={`${selectedCategory === 'Smart Home Devices'? 'underline': ''} text-blue-400 underline-offset-4 cursor-pointer hover:underline`}><li>Smart Home Devices</li></Link>
          </ul>
        </div>
        <div className='space-y-3'>
          <h1 className='text-lg font-semibold'>Filter by Brand</h1>
          <ul>
            <Link onClick={()=> toggleBrand('Apple')} className={`${selectedBrand === 'Apple'? 'underline': ''} text-blue-400 underline-offset-4 cursor-pointer hover:underline`}><li>Apple</li></Link>
            <Link onClick={()=> toggleBrand('Samsung')} className={`${selectedBrand === 'Samsung'? 'underline': ''} text-blue-400 underline-offset-4 cursor-pointer hover:underline`}><li>Samsung</li></Link>
            <Link onClick={()=> toggleBrand('HP')} className={`${selectedBrand === 'HP'? 'underline': ''} text-blue-400 underline-offset-4 cursor-pointer hover:underline`}><li>HP</li></Link>
            <Link onClick={()=> toggleBrand('Lenovo')} className={`${selectedBrand === 'Lenovo'? 'underline': ''} text-blue-400 underline-offset-4 cursor-pointer hover:underline`}><li>Lenovo</li></Link>
            <Link onClick={()=> toggleBrand('LG')} className={`${selectedBrand === 'LG'? 'underline': ''} text-blue-400 underline-offset-4 cursor-pointer hover:underline`}><li>LG</li></Link>
          </ul>
        </div>
        <div className='space-y-3'>
          <h1 className='text-lg font-semibold'>Filter by Price</h1>
          <ul>
            <Link onClick={()=>togglePriceRange('Less than 10000')} className={`${selectedPriceRange === 'Less than 10000'? 'underline': ''} text-blue-400 underline-offset-4 cursor-pointer hover:underline`}><li>Less than 10000</li></Link>
            <Link onClick={()=>togglePriceRange('10000 to 20000')} className={`${selectedPriceRange === '10000 to 20000'? 'underline': ''} text-blue-400 underline-offset-4 cursor-pointer hover:underline`}><li>10000 to 20000</li></Link>
            <Link onClick={()=>togglePriceRange('20000 to 50000')} className={`${selectedPriceRange === '20000 to 50000'? 'underline': ''} text-blue-400 underline-offset-4 cursor-pointer hover:underline`}><li>20000 to 50000</li></Link>
            <Link onClick={()=>togglePriceRange('More than 50000')} className={`${selectedPriceRange === 'More than 50000'? 'underline': ''} text-blue-400 underline-offset-4 cursor-pointer hover:underline`}><li>More than 50000</li></Link>
          </ul>
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-3xl font-semibold'>All Products</h1>
        <div className='grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3'>
          {selectedCategory || selectedBrand || selectedPriceRange? 
            filterProduct.map((product,index)=>{
              return (
                <Link to={`${product.id}/${product.name}`} onClick={()=>scrollToTop()} className='flex flex-col justify-between p-5 bg-[#F5F5F5] border border-slate-300 cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-105 transition-all duration-150'  key={index}>
                  <div className='flex flex-col justify-between' key={index}>
                  <img className='object-cover w-full' src={product.image} alt={product.name} />
                  <div className='flex flex-col items-center justify-center gap-3'>
                    <div className='flex flex-col items-center'>
                      <h1 className='text-lg font-semibold '>{product.name}</h1>
                      <p className='font-mono text-sm'>{product.category}</p>
                    </div>
                    <p className='font-mono text-lg'>₹ {product.price}</p>
                    <button className='p-2 hover:bg-[#2560e1] transition-all duration-150 bg-[#0a1a3d] text-white rounded-md'>View Details</button>
                  </div>
                </div>
                </Link>
              )
            }) : 
            products.map((product,index)=>{
              return (
                <Link to={`${product.id}/${product.name}`} onClick={()=>scrollToTop()} className='flex flex-col justify-between p-5 bg-[#F5F5F5] border border-slate-300 cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-105 transition-all duration-150'  key={index}>
                  <div className='flex flex-col justify-between'>
                  <img className='object-cover w-full' src={product.image} alt={product.name} />
                  <div className='flex flex-col items-center justify-center gap-3'>
                    <div className='flex flex-col items-center'>
                      <h1 className='text-lg font-semibold '>{product.name}</h1>
                      <p className='font-mono text-sm'>{product.category}</p>
                    </div>
                    <p className='font-mono text-lg'>₹ {product.price}</p>
                    <button className='p-2 hover:bg-[#2560e1] transition-all duration-150 bg-[#0a1a3d] text-white rounded-md'>View Details</button>
                  </div>
                </div>
                </Link>
              )
            })
          }
        </div> 
      </div>
      <div className='fixed h-10 text-4xl transition-all duration-200 bg-blue-600 cursor-pointer hover:scale-105 right-2 bottom-4 '>
        <button onClick={scrollToTop} className={`${isVisible ? 'flex': 'hidden'} transition-all duration-200`}><MdKeyboardDoubleArrowUp /></button>
      </div>
    </motion.div>
  )
}

export default Products

