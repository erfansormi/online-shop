import React, { createContext, useContext, useState } from 'react'

// components
import Layout from '../layout/layout';
import ProductImage from './detail/imageSection/productImage';
import CenterInfo from './detail/centerInfo/centerInfo';
import SellerBox from './detail/sellerSection/sellerBox';
import RelatedProducts from './relatedProducts';
import { Divider } from '@mui/material';
import TabsContainer from './tabs/tabsContainer';
import TopDetailContainer from './detail/topDetailContainer';

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

const ProductContainer = ({ product, relatedProducts }: Props) => {

    // states
    const [productInfo, setProductInfo] = useState<ProductInfo>({
        product,
        selectedSeller: product.sellers[0],
        selectedVariant: {
            ...product.sellers[0].variants.find(item => item.available) as SelectedVariant,
            selectedColor: (product.sellers[0].variants.find(item => item.available) as SelectedVariant).colors[0]
        },
        relatedProducts
    });

    return (
        <ProductContext.Provider value={{ productInfo, setProductInfo }}>
            <Layout max_w_3xl className='px-6 py-4'>
                <div className='flex flex-col gap-y-8'>

                    {/* top product detail */}
                    <TopDetailContainer />

                    <Divider />

                    {/* related products */}
                    <RelatedProducts />

                    <Divider />

                    <TabsContainer />
                </div>
            </Layout>
        </ProductContext.Provider>
    )
}

export default ProductContainer;