// context
import { useProductContext } from '../../../productContainer';

// components
import TabsTitle from '../tabsTitle';

const ProductDescription = () => {
    const { productInfo } = useProductContext();

    return (
        <div>
            {/* title */}
            <TabsTitle title='description' />

            <div className='text-gray-500 bg-white text-sm leading-[1.8] pl-2'>
                <p>{productInfo.product.description}</p>
            </div>
        </div>
    )
}

export default ProductDescription;