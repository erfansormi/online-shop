import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../../functions/axiosInstance';

// mui
import { LoadingButton } from '@mui/lab';

// user context
import { useUserContext } from '../../../context/userContext';

// icons
import { BsTrash } from 'react-icons/bs';

// types
import { SelectedProduct, User } from '../../../types/user/userTypes';

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
        let lastIndex = (user as User).cart.products.length - 1;

        body.sellerId = (user as User).cart.products[lastIndex].seller;
        body.selectedVariant._id = (user as User).cart.products[lastIndex].variant._id;
        body.selectedVariant.selectedColor = (user as User).cart.products[lastIndex].variant.color;
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

        // check if for remove product, there is in cart selected variant and color and seller id 
        // if variants not matches, will remove last product in cart
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
        <div className='mt-5 flex justify-center gap-x-3'>
            {
                productCount === 0 ?
                    // add to cart
                    <LoadingButton
                        variant={"contained"}
                        fullWidth
                        className="max-w-[600px] w-full mx-auto"
                        loading={loading}
                        disabled={loading}
                        onClick={() => handleClick("add-product")}
                    >
                        add to cart
                    </LoadingButton>
                    : productCount === 1 &&
                    //  remove from cart
                    <LoadingButton
                        variant={"contained"}
                        fullWidth
                        className="text-xl leading-[33px] w-full max-w-[100px]"
                        loading={loading}
                        disabled={loading}
                        onClick={() => handleClick("remove-product")}
                    >
                        <BsTrash className='text-xl leading-[33px]' />
                    </LoadingButton>
            }

            {
                isThereProductInCart && productCount > 1 &&
                //  decrease item 
                <LoadingButton
                    variant={"contained"}
                    className="text-xl leading-[33px] w-full max-w-[100px]"
                    onClick={() => handleClick("remove-product")}
                    loading={loading}
                    disabled={loading}
                >
                    -
                </LoadingButton>
            }

            {/* count */}
            {
                productCount ?
                    <span className='flex items-center w-[50px] justify-center'>
                        {productCount}
                    </span> :
                    null
            }

            {/* increase item */}
            {
                isThereProductInCart && productCount >= 1 &&
                <LoadingButton
                    variant={"contained"}
                    className="text-xl leading-[33px] w-full max-w-[100px]"
                    onClick={() => handleClick("add-product")}
                    loading={loading}
                    disabled={loading}
                >
                    +
                </LoadingButton>
            }
        </div>
    )
}

export default CartButtons;