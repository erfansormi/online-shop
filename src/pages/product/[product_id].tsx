import React, { Suspense, useContext, createContext } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

// components
import ProductContainer from '../../components/product/productContainer';
import Loading from '../../components/utils/loading/loading';

// context
const ProductContext = createContext({} as Product);
export const useProductSelector = () => useContext(ProductContext);

// types
import { Product } from '../../redux/data/dataSlice';

interface Props {
    product: Product
}

const ProductDetail = ({ product }: Props) => {
    const router = useRouter();

    return (
        <ProductContext.Provider value={product}>
            {
                router.isFallback ?
                    <Loading loading /> :
                    <Suspense fallback={<Loading loading />}>
                        <ProductContainer />
                    </Suspense>
            }
        </ProductContext.Provider>
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
    const updatedProduct: Product = {
        ...product,
        quantity: 0
    }

    return {
        props: {
            product: updatedProduct
        }
    }
}