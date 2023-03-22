import React, { createContext, useContext, useState } from 'react'

// components
import Layout from '../layout/layout';
import ProductImage from './detail/imageSection/productImage';
import CenterInfo from './detail/centerInfo/centerInfo';
import SellerBox from './detail/sellerSection/sellerBox';
import RelatedProducts from './detail/relatedProducts';
import { Divider } from '@mui/material';
import TabsContainer from './tabs/tabsContainer';

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

                    {/* product info */}
                    <div className='flex flex-col lg:flex-row justify-between gap-x-8 gap-y-12 lg:mt-14 md:mt-12 sm:mt-6 mt-2'>

                        {/* product image */}
                        <div className='lg:w-2/6'>
                            <ProductImage />
                        </div>

                        {/* other details */}
                        <div className="flex flex-col lg:w-4/6">

                            {/* title */}
                            <div className="mb-1 relative">
                                <div className='absolute -top-7 mb-2 capitalize text-cyan-500 font-bold'>
                                    <span>
                                        {product.category}
                                    </span>
                                </div>
                                <h1 className='text-2xl text-gray-800'>
                                    {product.title}
                                </h1>
                            </div>

                            <div className='flex flex-col md:flex-row gap-x-4 gap-y-8'>

                                {/* center details */}
                                <div className='md:w-4/6'>
                                    <CenterInfo />
                                </div>

                                <Divider className='md:hidden' />

                                {/* seller box */}
                                <div className='md:w-2/6 md:min-w-[290px] mt-1'>
                                    <SellerBox />
                                </div>
                            </div>
                        </div>
                    </div>

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