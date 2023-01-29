import React from 'react';
import Link from 'next/link';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../redux/store';
import { addToCart, removeFromCart, decreaseItem, increaseItem } from '../../../redux/cart/cartSlice';
import { useCartSelector } from '../../../redux/cart/cartSlice';

// funcs
import { getProductCount } from '../../functions/cart/cartFunctions';

// mui
import { Button } from '@mui/material';

// icons
import { BsTrash } from 'react-icons/bs';

// types
import { Product } from '../../../redux/data/dataSlice';

interface Props {
    product: Product
}

const CartBtns = ({ product }: Props) => {
    const cart = useCartSelector();
    const dispatch = useDispatch();

    return (
        <div className='mt-5 flex justify-center'>
            {
                // remove from cart
                getProductCount(cart.products, product) == 1 ?
                    <Button
                        variant={"contained"}
                        fullWidth
                        onClick={() => dispatch(removeFromCart(product))}
                        className="text-xl leading-[33px] w-full max-w-[100px]"
                    >
                        <BsTrash className='text-xl leading-[33px]' />
                    </Button> :

                    // add to cart
                    getProductCount(cart.products, product) == 0 &&
                    <Button
                        variant={"contained"}
                        fullWidth
                        className="max-w-[600px] w-full mx-auto"
                        onClick={() => dispatch(addToCart(product))}
                    >
                        add to cart
                    </Button>
            }

            {
                //  decrease item 
                getProductCount(cart.products, product) >= 2 &&
                <Button
                    variant={"contained"}
                    onClick={() => dispatch(decreaseItem(product))}
                    className="text-xl leading-[33px] w-full max-w-[100px]"
                >
                    -
                </Button>
            }

            {
                // count
                getProductCount(cart.products, product) ?
                    <span className='flex items-center w-[50px] justify-center'>
                        {getProductCount(cart.products, product)}
                    </span>
                    : null
            }

            {
                // increase item
                getProductCount(cart.products, product) >= 1 &&
                <>
                    <Button
                        variant={"contained"}
                        onClick={() => dispatch(increaseItem(product))}
                        className="text-xl leading-[33px] w-full max-w-[100px]"
                        disabled={getProductCount(cart.products, product) >= 6 ? true : false}
                    >
                        +
                    </Button>
                </>
            }

            {
                getProductCount(cart.products, product) >= 1 &&
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