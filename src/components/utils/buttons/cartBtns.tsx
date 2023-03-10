import React from 'react';
import Link from 'next/link';

// mui
import { Button } from '@mui/material';

// icons
import { BsTrash } from 'react-icons/bs';

// types
import { Product } from '../../../types/product/productTypes';

interface Props {
    product: Product
}

const CartBtns = ({ product }: Props) => {
    return (
        <div className='mt-5 flex justify-center'>
            {/* remove from cart */}
            {/* <Button
                variant={"contained"}
                fullWidth
                className="text-xl leading-[33px] w-full max-w-[100px]"
            >
                <BsTrash className='text-xl leading-[33px]' />
            </Button> */}

            {/* add to cart */}
            <Button
                variant={"contained"}
                fullWidth
                className="max-w-[600px] w-full mx-auto"
            >
                add to cart
            </Button>

            {/* {
                //  decrease item 
                <Button
                    variant={"contained"}
                    className="text-xl leading-[33px] w-full max-w-[100px]"
                >
                    -
                </Button>
            } */}

            {/* {
                // count
                <span className='flex items-center w-[50px] justify-center'>
                    0
                </span>
            }

            {
                // increase item
                <>
                    <Button
                        variant={"contained"}
                        className="text-xl leading-[33px] w-full max-w-[100px]"
                    >
                        +
                    </Button>
                </>
            } */}

            {
                <div className='flex text-gray-600 capitalize flex-col ml-3 justify-around'>
                    <span className='text-sm'>
                        in your basket
                    </span>
                    <span>
                        <span>
                            see
                        </span>
                        <Link href={"/cart"} className="ml-1 text-blue-500">
                            cart
                        </Link>
                    </span>
                </div>
            }
        </div>
    )
}

export default CartBtns;