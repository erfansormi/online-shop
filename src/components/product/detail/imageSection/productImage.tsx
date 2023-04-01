import React from 'react';
import Image from 'next/image';

// contexts
import { useProductContext } from '../../productContainer';
import { useUserContext } from '../../../../context/userContext';

// react toastify
import { toastify } from '../../../utils/toastify/toastifyFunc';

// icons
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

// axios
import { axiosInstance } from '../../../../functions/axiosInstance';

const ProductImage = () => {
    // context
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
                toastify("please login first!", "light", "error")
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

    return (
        <div className='flex w-full gap-x-3'>

            {/* left buttons */}
            <div className='text-slate-700 flex flex-col'>
                <span onClick={handleLikeProduct} className="cursor-pointer">
                    {
                        isThereInFavorites() ?
                            <FaHeart className='text-2xl text-red-500' /> :
                            <FiHeart className='text-2xl' />
                    }
                </span>
            </div>

            {/* image */}
            <div className='overflow-hidden py-8 border border-solid border-gray-200 rounded-lg select-none w-full'>
                <div className='h-full w-full flex justify-center'>
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={300}
                        height={450}
                        className="object-contain h-auto xl:w-[300px] md:w-[250px] w-[200px]"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductImage