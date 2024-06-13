import React, { useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { products } from '../../constants/Constants';
import { CartContext } from '../../Context/CartContext/CartContext';

function Header() {
    const { cart } = useContext(CartContext);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const { productId } = useParams();

    const product = products.find((pd) => {
        return pd.id === parseInt(productId) || pd.name === productId;
    });

    const handleSearch = () => {
        const trimmedSearch = search.trim().toLowerCase();

        if (trimmedSearch === "") {
            alert("Please enter a product name");
            return;
        }

        const matchedProduct = products.find((pd) => pd.name.toLowerCase() === trimmedSearch || pd.category.toLowerCase() === trimmedSearch);

        if (matchedProduct) {
            setSearch("");
            navigate(`/search/${encodeURIComponent(matchedProduct.name)}`);
        } else {
            console.log();("Product not found");
            navigate(`/search/${trimmedSearch}`);
        }
    };

    return (
        <div>
            <div className='flex justify-between fixed top-0 left-0 right-0 z-10 items-center bg-[#1D232A] text-[#F5F5F5] h-16 px-12'>
                <div>
                    <Link className='font-mono text-2xl font-bold px-2 py-1 rounded-md transition-all duration-200 hover:bg-[#3e444b]' to="/">TechTrove</Link>
                </div>
                <div className='relative flex items-center justify-between'>
                    <input
                        className='bg-[#3e444b] rounded-s-md px-4 py-2 text-[#F5F5F5] outline-none'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder='Search for products'
                    />
                    <button
                        onClick={handleSearch}
                        className='hover:bg-[#7ab2f3] rounded-e-md px-4 py-2 transition-all duration-200 bg-[#6292c8] cursor-pointer'
                    >
                        <CiSearch className='text-[#F5F5F5] text-2xl' />
                    </button>
                </div>
                <ul className='flex items-center gap-4 list-none'>
                    <li className='rounded-md transition-all duration-200 px-2 py-1 hover:bg-[#3e444b]'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='rounded-md transition-all duration-200 px-2 py-1 hover:bg-[#3e444b]'>
                        <Link to="/products">Products</Link>
                    </li>
                    <li className='rounded-md transition-all duration-200 px-2 py-1 hover:bg-[#3e444b]'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='rounded-md transition-all duration-200 px-2 py-1 hover:bg-[#3e444b]'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className='flex items-center cursor-pointer'>
                        <Link to={`/cart/${productId}`} className='text-[#F5F5F5] cursor-pointer text-2xl'><FaShoppingCart /></Link>
                        <label className='text-[#7ab2f3] ml-1'>{cart.length}</label>
                    </li>
                    <button className='bg-[#F5F5F5] rounded-md hover:bg-[#e1e1e1] transition-all duration-200 text-[#1D232A] px-4 py-1'>
                        <Link to='/'>Login</Link>
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;
