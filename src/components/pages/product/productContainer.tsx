import React, { createContext, useContext, useEffect, useState } from 'react'

// components
import Layout from '../../layout/layout';
import RelatedProducts from './relatedProducts';
import { Divider } from '@mui/material';
import TabsContainer from './tabs/tabsContainer';
import TopDetailContainer from './detail/topDetailContainer';

// axios
import { axiosInstance } from '../../../functions/axiosInstance';

// types
import { Comment, Product, ProductDetail, SellerWithDetail, Variant } from '../../../types/product/productTypes';

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
    setProductInfo: React.Dispatch<React.SetStateAction<ProductInfo>>,
    comments: Comment[],
    commentsLoading: boolean
}

// product context
const ProductContext = createContext({} as ContextType);
export const useProductContext = () => useContext(ProductContext);

// general context
import { useGeneralContext } from '../../../context/generalContext';

const ProductContainer = ({ product, relatedProducts }: Props) => {
    const { general: { loading } } = useGeneralContext();
    
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

    const [comments, setComments] = useState<Comment[]>([]);
    const [commentsLoading, setCommentsLoading] = useState(true);

    const fetchComments = () => {
        setCommentsLoading(true);

        axiosInstance.get(`/api/v1/products/${product._id}/comments`)
            .then(res => {
                setComments(res.data)
            })
            .finally(() => {
                setCommentsLoading(false);
            })
    }

    useEffect(() => {
        fetchComments();
    }, [loading])

    // update product detail
    useEffect(() => {
        setProductInfo({
            product,
            selectedSeller: product.sellers[0],
            selectedVariant: {
                ...product.sellers[0].variants.find(item => item.available) as SelectedVariant,
                selectedColor: (product.sellers[0].variants.find(item => item.available) as SelectedVariant).colors[0]
            },
            relatedProducts
        })
    }, [product])

    return (
        <ProductContext.Provider value={{ productInfo, setProductInfo, comments, commentsLoading }}>
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