import React from 'react';

// context
import { useProductContext } from '../productContainer';

// components
import SmallCardSlider from '../../utils/sliders/smallCardSlider';
import TitleSection from '../../utils/title/titleSection';

const RelatedProducts = () => {
    // context
    const { productInfo } = useProductContext();

    return (
        <div>
            <TitleSection title='related products' />
            <SmallCardSlider data={productInfo.relatedProducts} />
        </div>
    )
}

export default RelatedProducts;