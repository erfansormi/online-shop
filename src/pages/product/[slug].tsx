import React, { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

// general context hook
import { useGeneralContext } from '../../context/generalContext';

// axios
import { axiosInstance } from '../../functions/axiosInstance';

// components
import ProductContainer from '../../components/pages/product/productContainer';

// types
import { Product, ProductDetail } from '../../types/product/productTypes';

interface Props {
    product: ProductDetail,
    relatedProducts: Product[]
}

const ProductDetail = ({ product, relatedProducts }: Props) => {
    const router = useRouter();

    // general context
    const { general, setGeneral } = useGeneralContext();

    // fetch product( if user token is valid, product add to recent visits user)
    useEffect(() => {
        axiosInstance.get(`/api/v1/products/${product.slug}`);
    }, [])

    // If the page is not yet generated, this will be displayed
    if (router.isFallback) {
        setGeneral({
            ...general,
            loading: true
        })
        return
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
            params: { slug: item.slug },
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug;
    const res = await fetch(`${process.env.URL}/api/v1/products/${slug}`);
    const data = await res.json();

    return {
        props: {
            product: data.product,
            relatedProducts: data.relatedProducts
        },
        revalidate: 24 * 60 * 60,
    }
}