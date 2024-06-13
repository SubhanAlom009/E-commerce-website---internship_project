import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { products } from '../../constants/Constants'

function Search() {
    const { productName } = useParams()

    // Find the searched product in the products array based on name
    const resultProducts = products.filter((pd) => pd.name.toLowerCase().includes(productName.toLowerCase()) || pd.category.toLowerCase().includes(productName.toLowerCase()));

    return (
        <div className='mx-4 mt-24 mb-16'>
            <div>
                {resultProducts ? (
                    <div className='flex justify-center mt-24 mb-16'>
                        <span className='mr-4 font-bold'>Searched Products: </span>{resultProducts.length}
                    </div>

                ) : (
                    <div className='flex justify-center h-screen mt-24 mb-16'>
                        No Product Found
                    </div>
                )}
            </div>
            <div className='flex flex-col items-center justify-center gap-8'>
                {
                    resultProducts.map((pd, index) => (
                        <div key={index} className='flex items-center justify-center gap-10 px-4 py-4 bg-blue-500 sm:w-1/3 rounded-xl'>
                            <div >
                                <Link to={`../${pd.id}/${pd.name}`}><img className='w-[300px] rounded-xl' src={pd.image} alt={pd.name} /></Link>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='font-mono text-xl font-bold'>{pd.name}</h1>
                                <h1 className='font-mono'>₹ {pd.price}</h1>
                                <h1 className='my-2 text-sm'>{pd.category}</h1>
                                <h1 className='text-sm'>{pd.brand}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Search
