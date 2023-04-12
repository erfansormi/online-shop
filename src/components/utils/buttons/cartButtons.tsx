import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../../functions/axiosInstance';

// spinner
import { PulseLoader } from "react-spinners";

// mui
import { LoadingButton } from '@mui/lab';

// user context
import { useUserContext } from '../../../context/userContext';

// icons
import { BsTrash } from 'react-icons/bs';

// types
import { SelectedProduct } from '../../../types/user/userTypes';
import { Button, ButtonGroup } from '@mui/material';

interface Props {
    productId: string,
    sellerId: string,
    selectedVariant: {
        selectedColor: string,
        variantId: string
    }
}

const CartButtons = ({ productId, selectedVariant, sellerId }: Props) => {
    const { user, setUser } = useUserContext();
    const [loading, setLoading] = useState(false);

    const [isThereProductInCart, setIsThereProductInCart] = useState<SelectedProduct[]>([]);
    const productCount = isThereProductInCart.reduce((total, value) => total + value.variant.quantity, 0);

    const handleIsThereProduct = () => {
        let arr: SelectedProduct[] = [];

        user?.cart.products.filter(item => {
            if (item.product._id === productId && item.variant._id === selectedVariant.variantId && item.variant.color === selectedVariant.selectedColor && item.seller === sellerId) {
                arr.push(item);
            }
        })

        setIsThereProductInCart(arr)
    }

    const handleClick = async (endpoint: "add-product" | "remove-product") => {
        setLoading(true);

        await axiosInstance.post(`/api/v1/users/cart/${endpoint}`, {
            productId,
            sellerId,
            selectedVariant: {
                selectedColor: selectedVariant.selectedColor,
                _id: selectedVariant.variantId
            }
        })
            .then((res) => {
                setUser(res.data.user);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        handleIsThereProduct()
    }, [user, productId, selectedVariant, sellerId])

    return (
        <div className='mt-5 flex justify-center gap-x-3 w-full'>
            <ButtonGroup
                variant="text"
                aria-label="text button group"
                color='inherit'
                fullWidth
            >
                {
                    productCount === 0 ?
                        // add to cart
                        <LoadingButton
                            fullWidth
                            color="primary"
                            variant="contained"
                            className="max-w-[600px] mx-auto"
                            loading={loading}
                            onClick={() => handleClick("add-product")}
                        >
                            add to cart
                        </LoadingButton>
                        : productCount === 1 &&
                        //  remove from cart
                        <LoadingButton
                            color="primary"
                            size='small'
                            fullWidth
                            className="text-xl leading-[33px] w-full max-w-[100px]"
                            onClick={() => handleClick("remove-product")}
                            disabled={loading}
                        >
                            <BsTrash className='text-xl leading-[33px]' />
                        </LoadingButton>
                }

                {
                    isThereProductInCart && productCount > 1 &&
                    //  decrease item 
                    <LoadingButton
                        color="primary"
                        size='small'
                        className="text-xl leading-[33px] w-full max-w-[100px]"
                        onClick={() => handleClick("remove-product")}
                        disabled={loading}
                    >
                        -
                    </LoadingButton>
                }

                {/* count */}
                {
                    productCount ?
                        <Button className='cursor-default hover:bg-inherit'>
                            <span className='flex items-center w-[50px] justify-center mx-2 text-gray-800 leading-[15px]'>
                                {
                                    loading ?
                                        <PulseLoader size={9} color="#6b7280" /> :
                                        productCount
                                }
                            </span>
                        </Button> :
                        null
                }

                {/* increase item */}
                {
                    isThereProductInCart && productCount >= 1 &&
                    <LoadingButton
                        color="primary"
                        size='small'
                        className="text-xl leading-[33px] w-full max-w-[100px]"
                        onClick={() => handleClick("add-product")}
                        disabled={loading}
                    >
                        +
                    </LoadingButton>
                }
            </ButtonGroup>
        </div>
    )
}

export default CartButtons;