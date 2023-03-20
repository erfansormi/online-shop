import React, { useContext, createContext, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

// components
import ProductContainer from '../../components/product/productContainer';
import Loading from '../../components/utils/loading/loading';

// types
import { Product, ProductDetail, SellerWithDetail, Variant } from '../../types/product/productTypes';

interface Props {
    product: ProductDetail,
    relatedProducts: Product[]
}

interface SelectedVariant extends Variant {
    selectedColor: string
}

// context type
interface ProductInfo {
    product: ProductDetail,
    selectedSeller: SellerWithDetail,
    selectedVariant: SelectedVariant,
    relatedProducts: Product[]
}

interface ContextType {
    productInfo: ProductInfo
    setProductInfo: React.Dispatch<React.SetStateAction<ProductInfo>>
}

// context
const ProductContext = createContext({} as ContextType);
export const useProductContext = () => useContext(ProductContext);

const ProductDetail = ({ product, relatedProducts }: Props) => {
    const router = useRouter();

    const [productInfo, setProductInfo] = useState<ProductInfo>({
        product,
        selectedSeller: product.sellers[0],
        selectedVariant: {
            ...product.sellers[0].variants.find(item => item.available) as SelectedVariant,
            selectedColor: (product.sellers[0].variants.find(item => item.available) as SelectedVariant).colors[0]
        },
        relatedProducts
    })


    // if (router.isFallback) {
    //     return <Loading loading />
    // }
    return (
        <ProductContext.Provider value={{ productInfo, setProductInfo }}>
            <ProductContainer />
        </ProductContext.Provider>
    )
}

export default ProductDetail;

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${process.env.URL}/api/v1/products`);
    const data = await res.json();
    const paths = await data.products.map((item: any) => {
        return {
            params: { product_id: item.slug }
        }
    })

    return {
        paths,
        fallback: "blocking"
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
        revalidate: 24 * 60 * 60
    }
}