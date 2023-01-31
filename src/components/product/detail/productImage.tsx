import React from 'react';
import Image from 'next/image';

// context
import { useProductSelector } from '../../../pages/product/[product_id]';

// mui
import { Skeleton } from '@mui/material';

const ProductImage = () => {
    const product = useProductSelector();

    // state
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <>
            {
                !product || loading ?
                    <Skeleton variant="rounded" width="100%" height="100%" /> :
                    product &&
                    <div className='overflow-hidden py-8 border border-solid border-gray-200 rounded-lg select-none'>
                        <div className='h-full w-full flex justify-center'>
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={300}
                                height={450}
                                className="object-contain h-auto xl:w-[300px] md:w-[250px] w-[200px]"
                            />
                        </div>
                    </div>
            }
        </>
    )
}

export default ProductImage