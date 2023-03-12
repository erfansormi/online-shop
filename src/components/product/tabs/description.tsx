import React, { LegacyRef } from 'react'

// context
import { useProductContext } from '../../../pages/product/[product_id]';

// components
import TabsTitle from './tabsTitle';

// ts
interface Props {
    descriptionRef: LegacyRef<HTMLDivElement> | undefined;
}

const ProductDescription = ({ descriptionRef }: Props) => {
    const { productInfo } = useProductContext();

    return (
        <div
            ref={descriptionRef}
        >
            {/* title */}
            <TabsTitle title='description' />

            <div className='text-gray-500 bg-white text-sm leading-[1.8] pl-2'>
                <p>{productInfo.product.description}</p>
            </div>
        </div>
    )
}

export default ProductDescription;