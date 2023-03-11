import React, { Suspense, useContext, createContext, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

// components
import ProductContainer from '../../components/product/productContainer';
import Loading from '../../components/utils/loading/loading';

// types
import { ProductDetail, SellerWithDetail, Variant } from '../../types/product/productTypes';

interface Props {
    product: ProductDetail
}

// context type
interface ProductInfo {
    product: ProductDetail,
    selectedSeller: SellerWithDetail,
    selectedVariant: Variant
}

interface ContextType {
    productInfo: ProductInfo
    setProductInfo: React.Dispatch<React.SetStateAction<ProductInfo>>
}

// context
const ProductContext = createContext({} as ContextType);
export const useProductContext = () => useContext(ProductContext);

const ProductDetail = ({ product }: Props) => {
    const router = useRouter();

    const [productInfo, setProductInfo] = useState<ProductInfo>({
        product,
        selectedSeller: product.sellers[0],
        selectedVariant: product.sellers[0].variants.find(item => item.available) as Variant
    })

    return (
        <ProductContext.Provider value={{ productInfo, setProductInfo }}>
            {
                router.isFallback ?
                    <Loading loading /> :
                    <ProductContainer />
            }
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
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.product_id;
    const res = await fetch(`${process.env.URL}/api/v1/products/${id}`);
    const data = await res.json();

    return {
        props: {
            product: data.product
        }
    }
}