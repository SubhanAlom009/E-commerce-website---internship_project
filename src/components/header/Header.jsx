import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { products } from '../../constants/Constants';
import { CartContext } from '../../Context/CartContext/CartContext';
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

function Header() {
    const { cart } = useContext(CartContext);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const { productId } = useParams();
    const [scroll, setScroll] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isProductVisible, setIsProductVisible] = useState(false);
    const [isCategoryVisible, setIsCategoryVisible] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const { isLoggedIn, logout} = useContext(AuthContext);

    
    const handleLogout = () => {

        logout();
        toast.success("Logout Successful")
        setTimeout(() => {
            navigate("/");
            window.location.reload()
        }, 500);
        
    }

    const searchRef = useRef(null);

    const product = products.find((pd) => pd.id === parseInt(productId) || pd.name === productId);

    const trimmedSearch = search.trim().toLowerCase();
    const matchedProduct = products.find((pd) => pd.name.toLowerCase() === trimmedSearch || pd.category.toLowerCase() === trimmedSearch);

    const searchResult = (matchedProduct ?
        <ul 
        className={`${isProductVisible || isCategoryVisible ? "block" : "hidden"} space-y-2 list-none`}>
            <Link to={`/search/${encodeURIComponent(matchedProduct?.name)}`}>
                <span>Product:</span>
                <li className='bg-[#36a9cf] my-2 border border-slate-800 px-4 py-2 rounded-lg w-[280px]'>
                    {matchedProduct?.name}
                </li>
            </Link>
            <Link to={`/search/${encodeURIComponent(matchedProduct?.name)}`}>
                <span>Category:</span>
                <li className='bg-[#36a9cf] border border-slate-800 px-4 py-2 rounded-lg w-[280px]'>{matchedProduct?.category}</li>
            </Link>
        </ul> : search.length > 3 ? <div className='px-4 text-center'>No product found. <br /> Name should be exact. <br /> (try product 1)</div> : <div>Type a product name</div>
    )

    const handleSearch = () => {
        if (trimmedSearch === "") {
            toast.error("Search field cannot be empty");
            return;
        }

        if (matchedProduct) {
            setSearch("");
            navigate(`/search/${encodeURIComponent(matchedProduct.name)}`);
        } else {
            console.log("Product not found");
            navigate(`/search/${trimmedSearch}`);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 30);
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!searchRef.current.contains(event.target)) {
                setIsVisible(false);
            }
        }

        if (isVisible) {
            window.addEventListener('click', handleClickOutside);
        } else {
            window.removeEventListener('click', handleClickOutside);
        }

        return () => {
            window.removeEventListener('click', handleClickOutside);
        }
    }, [isVisible]);

    useEffect(() => {
        if (matchedProduct) {
            setIsProductVisible(true);
            setIsCategoryVisible(true);
        } else {
            setIsProductVisible(false);
            setIsCategoryVisible(false);
        }
    }, [matchedProduct]);

    const navbarItems = ( 
                  <ul className='flex flex-col items-center justify-center gap-5'>
                    <li className='rounded-md transition-all duration-200 hover:bg-[#36a9cf] py-1 px-3'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='rounded-md transition-all duration-200 hover:bg-[#36a9cf] py-1 px-3'>
                        <Link to="/products">Products</Link>
                    </li>
                    <li className='rounded-md transition-all duration-200 hover:bg-[#36a9cf] py-1 px-3'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='rounded-md transition-all duration-200 hover:bg-[#36a9cf] py-1 px-3'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className='flex items-center cursor-pointer'>
                        <Link to={`/cart/${productId}`} className='text-[#F5F5F5] cursor-pointer text-2xl'><FaShoppingCart /></Link>
                        <label className='text-[#30cbff] ml-1'>{cart.length}</label>
                    </li>
                    {
                        isLoggedIn ? 
                        <button className='bg-[#e48c3a] rounded-md hover:bg-[#f98253] transition-all duration-200 px-6 py-2'>
                            <p onClick={handleLogout} className='text-[#F5F5F5] font-semibold'>Logout</p>
                        </button> : 
                        <button className='bg-[#36a9cf] rounded-md hover:bg-[#44c1ff] transition-all duration-200 px-6 py-2'>
                            <Link to='/login' className='text-[#F5F5F5] font-semibold'>Login</Link>
                        </button>
                    }
                  </ul>
                ); 
                
              const handleMenuVisibility = () => {
                  setIsMenuVisible((prev) => !prev);
              }

    return (
        <div>
            <div className={`${scroll ? "shadow-[rgba(50,50,93,0.45)_0px_12px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" : ""} fixed top-0 left-0 right-0 z-10 flex justify-between items-center h-16  px-4 sm:px-12 transition-all duration-100 text-[#FFFFFF] bg-slate-700`}>
                <div>
                    <Link className='font-mono text-lg sm:text-2xl font-bold px-2 py-1 rounded-md transition-all mr-4 duration-200 hover:bg-[#36a9cf]' to="/">TechTrove</Link>
                </div>
                <div 
                onFocus={() => setIsVisible(true)} 
                className='relative flex items-center justify-between'>
                    <motion.div   
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1 }} 
                    className={`absolute ${isVisible ? "block" : "hidden"} py-4 text-lg font-medium flex gap-5 flex-col items-center sm:left-70 right-0 top-16 bg-[#4daecf] rounded-md text-[#F5F5F5] w-[288px] h-[300px] overflow-x-hidden overflow-y-auto list-none`}>
                        {searchResult}
                    </motion.div>
                    <input
                        ref={searchRef}
                        className='w-full rounded-s-md px-4 py-2 text-[#F5F5F5] outline-none placeholder:text-[#F5F5F5] bg-[#4daecf]'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder='Search for products'
                    />
                    <button
                        onClick={handleSearch}
                        className='hover:bg-[#44c1ff] rounded-e-md px-4 py-2 transition-all duration-200 bg-[#36a9cf] cursor-pointer'
                    >
                        <CiSearch className='text-[#F5F5F5] text-2xl' />
                    </button>
                </div>
                <div onClick={handleMenuVisibility} className='flex ml-4 text-2xl cursor-pointer sm:hidden'>
                    <GiHamburgerMenu />
                </div>
                <AnimatePresence>
                    {isMenuVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1 }} 
                            className='absolute z-20 flex flex-col items-center justify-center w-2/3 h-auto py-4 rounded-md top-20 right-10 bg-slate-700 sm:hidden'>
                            {navbarItems}
                        </motion.div>
                    )}
                </AnimatePresence>
                <ul className='items-center hidden gap-4 list-none sm:flex'>
                    <li className='rounded-md transition-all duration-200 px-2 py-1 hover:bg-[#36a9cf]'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='rounded-md transition-all duration-200 px-2 py-1 hover:bg-[#36a9cf]'>
                        <Link to="/products">Products</Link>
                    </li>
                    <li className='rounded-md transition-all duration-200 px-2 py-1 hover:bg-[#36a9cf]'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='rounded-md transition-all duration-200 px-2 py-1 hover:bg-[#36a9cf]'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className='flex items-center cursor-pointer'>
                        <Link to={`/cart/${productId}`} className='text-[#F5F5F5] cursor-pointer text-2xl'><FaShoppingCart /></Link>
                        <label className='text-[#30cbff] ml-1'>{cart.length}</label>
                    </li>
                    {
                        isLoggedIn ? 
                        <button className='bg-[#e48c3a] rounded-md hover:bg-[#f98253] transition-all duration-200 px-6 py-2'>
                            <p onClick={handleLogout} className='text-[#F5F5F5] font-semibold'>Logout</p>
                        </button> : 
                        <button className='bg-[#36a9cf] rounded-md hover:bg-[#44c1ff] transition-all duration-200 px-6 py-2'>
                            <Link to='/login' className='text-[#F5F5F5] font-semibold'>Login</Link>
                        </button>
                    }

                </ul>
            </div>
        </div>
    );
}

export default Header;
