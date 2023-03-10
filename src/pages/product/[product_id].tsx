import React, { Suspense, useContext, createContext } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

// components
import ProductContainer from '../../components/product/productContainer';
import Loading from '../../components/utils/loading/loading';

// context
const ProductContext = createContext({} as Product);
export const useProductContext = () => useContext(ProductContext);

// types
import { Product } from '../../types/product/productTypes';
import { useFetch } from '../../hooks/fetcher/useFetch';

interface Data {
    product: Product,
    success: boolean
}

interface Props {
    data: Data
}

const ProductDetail = ({ data }: Props) => {
    const router = useRouter();

    return (
        <ProductContext.Provider value={data.product}>
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
    const { data } = await useFetch("products");
    const paths = await data.products.map((item: any) => {
        return {
            params: { product_id: item.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.product_id;
    const { data } = await useFetch(`products/${id}`)

    return {
        props: {
            data
        }
    }
}