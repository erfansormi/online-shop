// context
import { useProductContext } from '../../../productContainer';

// components
import TabContentTitle from '../../../../data_display/tabContentTitle';

const ProductDescription = () => {
    const { productInfo } = useProductContext();

    return (
        <div>
            {/* title */}
            <TabContentTitle title='description' className='mb-12' />

            <div className='text-gray-500 bg-white text-sm leading-[1.8] pl-2'>
                <p>{productInfo.product.description}</p>
            </div>
        </div>
    )
}

export default ProductDescription;