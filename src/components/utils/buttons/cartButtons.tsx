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
import { SelectedProduct, User } from '../../../types/user/userTypes';
import { Button, ButtonGroup } from '@mui/material';

interface Props {
    productId: string,
    sellerId: string,
    selectedVariant: {
        selectedColor: string,
        variantId: string
    }
}

interface BodyRequest {
    productId: string;
    sellerId: string;
    selectedVariant: {
        selectedColor: string;
        _id: string;
    };
}

const CartButtons = ({ productId, selectedVariant, sellerId }: Props) => {
    const { user, setUser } = useUserContext();
    const [loading, setLoading] = useState(false);

    const [isThereProductInCart, setIsThereProductInCart] = useState<SelectedProduct[]>([]);
    const productCount = isThereProductInCart.reduce((total, value) => total + value.variant.quantity, 0);

    const handleIsThereProduct = () => {
        let arr: SelectedProduct[] = [];

        user?.cart.products.filter(item => {
            if (item.product._id === productId) {
                arr.push(item);
            }
        })

        setIsThereProductInCart(arr)
    }

    const editBody = (body: BodyRequest) => {
        let productIndex = (user as User).cart.products.findIndex(item => item.product._id === productId);

        body.sellerId = (user as User).cart.products[productIndex].seller;
        body.selectedVariant._id = (user as User).cart.products[productIndex].variant._id;
        body.selectedVariant.selectedColor = (user as User).cart.products[productIndex].variant.color;
    }

    const handleBody = (endpoint: "add-product" | "remove-product") => {
        let body: BodyRequest = {
            productId,
            sellerId,
            selectedVariant: {
                selectedColor: selectedVariant.selectedColor,
                _id: selectedVariant.variantId
            }
        }

        if (endpoint === "add-product") {
            return body
        }

        // اگر برای حذف محصول، واریانت انتخاب شده برابر با واریانت محصول در سبد خرید نبود
        // بادی ریکوئست اصلاح شده و سایر واریانت های محصول حذف خواهند شد
        if (!isThereProductInCart.find(item => item.variant._id === selectedVariant.variantId)) {
            editBody(body)
        }
        if (!isThereProductInCart.find(item => item.variant.color === selectedVariant.selectedColor)) {
            editBody(body)
        }
        if (!isThereProductInCart.find(item => item.seller === sellerId)) {
            editBody(body)
        }

        return body;
    }

    const handleClick = async (endpoint: "add-product" | "remove-product") => {
        setLoading(true);

        await axiosInstance.post(`/api/v1/users/cart/${endpoint}`, handleBody(endpoint))
            .then((res) => {
                setUser(res.data.user);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        handleIsThereProduct()
    }, [user])

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