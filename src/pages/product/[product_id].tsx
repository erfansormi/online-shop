import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

// components
import ProductContainer from '../../components/product/productContainer';
import Loading from '../../components/utils/loading/loading';

// types
import { Product, ProductDetail } from '../../types/product/productTypes';

interface Props {
    product: ProductDetail,
    relatedProducts: Product[]
}

const ProductDetail = ({ product, relatedProducts }: Props) => {
    const router = useRouter();

    // If the page is not yet generated, this will be displayed
    if (router.isFallback) {
        return <Loading loading />
    }

    return (
        <ProductContainer product={product} relatedProducts={relatedProducts} />
    )
}

export default ProductDetail;

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${process.env.URL}/api/v1/products`);
    const data = await res.json();
    const paths = data.products.map((item: any) => {
        return {
            params: { product_id: item.slug },
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.product_id;
    const res = await fetch(`${process.env.URL}/api/v1/products/${id}`);
    const data = await res.json();

    return {
        props: {
            product: data.product,
            relatedProducts: data.relatedProducts
        },
        revalidate: 24 * 60 * 60,
    }
}