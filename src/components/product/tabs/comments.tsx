import { Button, Divider } from '@mui/material';

// context
import { useProductContext } from '../../../pages/product/[product_id]';

// components
import SeeRating from '../../data_display/rating';
import TabsTitle from './tabsTitle';

const ProductComments = () => {
    // context
    const { productInfo } = useProductContext();
    const { product } = productInfo;

    return (
        <div>
            {/* title */}
            <TabsTitle title='comments and rating' />

            <div className='flex flex-col md:flex-row gap-x-10 gap-y-8'>

                {/* rating and register a comment */}
                <div className='md:w-2/6 md:max-w-[260px] flex flex-col gap-y-5 min-w-[210px]'>

                    {/* rate and count */}
                    <div className='flex flex-col gap-y-3'>
                        <div className="flex items-center gap-x-1">
                            <span className='font-bold text-2xl text-gray-800'>
                                {product.rating.rate}
                            </span>
                            <span className='text-xs text-gray-600'>
                                out of 5
                            </span>
                        </div>
                        <div>
                            <SeeRating size='small' rate={product.rating.rate} count={product.rating.count} />
                        </div>
                    </div>

                    <Divider />

                    {/* register a comment */}
                    <div className='flex flex-col gap-y-2'>
                        <span className='text-xs text-gray-500'>leave a comment about this product</span>
                        <Button variant="outlined">
                            register comment
                        </Button>
                    </div>
                </div>

                <Divider className='md:hidden' />

                {/* comments */}
                <div className="w-full text-gray-700">
                    {product.comments.length ?
                        <div>

                        </div> :
                        <div className='capitalize'>
                            <h6 className='mb-4 text-lg md:mt-1.5'>
                                You can also comment on this product
                            </h6>
                            <p className='text-sm text-gray-500'>
                                no comment is recorded!
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductComments;