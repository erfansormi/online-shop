import React from 'react'
import { axiosInstance } from '../../../../../functions/axiosInstance';

// icons
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { BsShareFill } from 'react-icons/bs';

// contexts
import { useUserContext } from '../../../../../context/userContext';
import { useProductContext } from '../../productContainer';

// toast
import { toastify } from '../../../../utils/toastify/toastifyFunc';

// components
import { Tooltip } from '@mui/material';

const TopLeftButtons = () => {
    const { user, setUser } = useUserContext();
    const { productInfo } = useProductContext();
    const { product } = productInfo;

    // like product handle click
    const handleLikeProduct = async () => {
        await axiosInstance.post(`/api/v1/users/${product._id}/add-to-favorites`)
            .then((res) => {
                if (user) {
                    setUser({
                        ...user,
                        favorites_list: res.data.favorites_list
                    })
                }
            })
            .catch((err) => {
                toastify("please login first!", "error")
            })
    }

    // if product there is in favorites list returned true else returned false
    const isThereInFavorites = () => {
        if (!user) {
            return false;
        }

        if (user.favorites_list.find(item => item._id == product._id)) {
            return true
        }
        return false
    }

    // handle copy product link
    const handleCopyLink = () => {
        if (typeof window !== "undefined") {
            window.navigator.clipboard.writeText(window.location.href);
            toastify("product address copied!", "info")
        }
    }

    return (
        <div className='text-slate-700 flex lg:flex-col gap-y-3 gap-x-5 text-2xl'>

            {/* like product */}
            <span onClick={handleLikeProduct} className="cursor-pointer">
                {
                    isThereInFavorites() ?
                        <Tooltip title="Remove From Favorites">
                            <div>
                                <FaHeart className=' text-red-500' />
                            </div>
                        </Tooltip> :
                        <Tooltip title="Add To Favorites">
                            <div>
                                <FiHeart />
                            </div>
                        </Tooltip>

                }
            </span>

            {/* share product */}
            <span className='cursor-pointer' onClick={handleCopyLink} >
                <BsShareFill />
            </span>
        </div>
    )
}

export default TopLeftButtons;