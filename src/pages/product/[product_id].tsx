import React, { createContext, useContext } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';

// type
import { Product } from '../../redux/data/dataSlice';

interface Props {
    product: Product
}

// components
import ProductContainer from '../../components/product/productContainer';

// context
const ProductDetailContext = createContext({} as Product);
export const useProductDetail = () => useContext(ProductDetailContext);

const ProductDetail = ({ product }: Props) => {
    return (
        <ProductDetailContext.Provider value={product}>
            <ProductContainer />
        </ProductDetailContext.Provider>
    )
}

export default ProductDetail;

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products: Product[] = await res.json();

    const paths = products.map(item => {
        return {
            params: { product_id: `${item.id}` }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.product_id;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: Product = await res.json();

    return {
        props: {
            product
        }
    }
}