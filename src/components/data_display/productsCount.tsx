import React from 'react'

const ProductsCount = ({ products_counts }: { products_counts: number }) => {
    return (
        <span className='px-1 py-1.5 rounded-xl bg-gray-200 text-gray-600 text-[0.7rem] mt-1 leading-[1.4]'>
            {products_counts} products
        </span>
    )
}

export default ProductsCount;