import React,{useState, useEffect, useContext} from 'react'
import { products } from '../../constants/Constants'
import { useParams } from 'react-router-dom'
import Zoom from 'react-medium-image-zoom'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import 'react-medium-image-zoom/dist/styles.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext/CartContext.jsx';

function ProductViewPage() {

    const { productId } = useParams();
    const product = products.find((product) => product.id === parseInt(productId) || product.name ===  productId);

    const filterSimilarProduct = products.filter((pd)=>pd.category === product.category && pd.id !== product.id)
    const moreProducts = products.filter((pd)=>pd.id !== product.id)

    const [isVisible, setIsVisible] = useState(false)

    const {handleCart, quantity, updateQuantity, setQuantity} = useContext(CartContext)

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

  const handleQuantityChange = (e) => {
    const value = e.target.value
    if (value >= 1) {
      setQuantity(value);
      updateQuantity(product.id, value);
    }
  };

  return (
    <div className='flex flex-col mx-8 mt-24 mb-12'>
        <div className='flex justify-center gap-24'>
            <div className='w-1/2'>
                <Zoom>
                    <img className='rounded-xl' src={product.image} />
                </Zoom>
            </div>
            <div className='flex flex-col justify-center w-1/2 space-y-4'>
                <h1 className='font-mono text-3xl font-bold'>{product.name}</h1>
                <p className='w-2/3 text-sm'>{product.description}</p>
                <p className='text-2xl'>Price: <span>₹ {product.price}</span></p>
                <p className='text-2xl'>Reviews: <span>{product.reviews}</span></p>
                <p className='text-2xl'>Quantity: <input className='w-12 p-2 border-2 rounded-lg ' type="number" min={1} max={10} value={quantity} onChange={handleQuantityChange}/></p>
                <button onClick={()=>handleCart(product)} className='bg-[#0a1a3d] text-[#F5F5F5] p-3 rounded-lg hover:bg-[#2560e1] transition-all duration-150'>Add to Cart</button>
                <Link to={`/cart/${product.id}`} className='bg-[#0a1a3d] text-[#F5F5F5] p-3 rounded-lg hover:bg-[#2560e1] transition-all duration-150 text-center'><button className='w-full' >Buy Now</button></Link>
            </div>
        </div>
        <div className='w-full h-[1px] my-12 bg-slate-500'></div>
        <div>
            <h1 className='mb-8 text-3xl font-bold underline underline-offset-2'>Similar Products</h1>
            <div className='grid grid-cols-4 gap-4 '>
                {
                    filterSimilarProduct.map((product,index)=>{
                        return (
                            <Link to={`/products/${product.id}/${product.name}`} onClick={()=>scrollToTop()} className='flex flex-col justify-between p-5 bg-[#F5F5F5] border border-slate-300 cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-95 transition-all duration-150'  key={index}>
                            <div className='flex flex-col justify-between'>
                            <img className='object-cover w-full' src={product.image} alt={product.name} />
                            <div className='flex flex-col items-center justify-center gap-3'>
                              <div className='flex flex-col items-center'>
                                <h1 className='text-lg font-semibold '>{product.name}</h1>
                                <p className='font-mono text-sm'>{product.category}</p>
                              </div>
                              <p className='font-mono text-lg'>₹ {product.price}</p>
                            </div>
                          </div>
                          </Link>
                        )
                    })
                }
            </div>
        </div>
        <div>
            <h1 className='my-8 mb-8 text-3xl font-bold underline underline-offset-2'>More Products</h1>
            <div className='grid grid-cols-4 gap-4'>
                {
                    moreProducts.map((product,index)=>{
                        return (
                            <Link to={`/products/${product.id}/${product.name}`} onClick={()=>scrollToTop()} className='flex flex-col justify-between p-5 bg-[#F5F5F5] border border-slate-300 cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-95 transition-all duration-150'  key={index}>
                            <div className='flex flex-col justify-between'>
                            <img className='object-cover w-full' src={product.image} alt={product.name} />
                            <div className='flex flex-col items-center justify-center gap-3'>
                              <div className='flex flex-col items-center'>
                                <h1 className='text-lg font-semibold '>{product.name}</h1>
                                <p className='font-mono text-sm'>{product.category}</p>
                              </div>
                              <p className='font-mono text-lg'>₹ {product.price}</p>
                            </div>
                          </div>
                          </Link>
                        )
                    })
                }
            </div>
        </div>
        <div className='fixed h-10 text-4xl transition-all duration-200 bg-blue-600 cursor-pointer hover:scale-95 right-2 bottom-4 '>
            <button onClick={scrollToTop} className={`${isVisible ? 'flex': 'hidden'} transition-all duration-200`}><MdKeyboardDoubleArrowUp /></button>
        </div>
    </div>
  )
}

export default ProductViewPage
