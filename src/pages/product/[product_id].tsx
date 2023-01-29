import React from 'react'
import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

// redux
import { wrapper } from '../../redux/store';
import { getProductDetail } from '../../redux/productDetail/productDetailSlice';
import { Product } from '../../redux/data/dataSlice';

// components
import ProductContainer from '../../components/product/productContainer';
import Loading from '../../components/utils/loading/loading';

const ProductDetail = () => {
    const router = useRouter();

    return (
        <>
            {
                router.isFallback ?
                    <Loading loading /> :
                    <ProductContainer />
            }
        </>
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

export const getStaticProps = wrapper.getStaticProps(store => async ({ params }) => {
    const id = params?.product_id;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: Product = await res.json();
    const updatedProduct: Product = {
        ...product,
        quantity: 0
    }

    store.dispatch(getProductDetail(updatedProduct))

    return {
        props: {}
    }
})