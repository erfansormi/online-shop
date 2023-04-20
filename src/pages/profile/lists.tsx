import React from 'react'
import Image from "next/image";
import Link from "next/link";

// user context
import { useUserContext } from '../../context/userContext'

// axios
import { axiosInstance } from '../../functions/axiosInstance';

// components
import ProfileContainer from '../../components/pages/profile/profileContainer';
import ProfileContentContainer from '../../components/pages/profile/profileContentContainer';
import TabContentTitle from '../../components/data_display/tabContentTitle';
import Price from '../../components/utils/price/price';
import DiscountPercentage from '../../components/utils/price/discountPercentage';
import OldPrice from '../../components/utils/price/oldPrice';
import { Button, Divider } from '@mui/material';
import ProductSkeleton from '../../components/utils/loading/productSkeleton';

const Lists = () => {
    const { user, setUser } = useUserContext();

    const handleClick = async (id: string) => {
        await axiosInstance.post(`/api/v1/users/${id}/add-to-favorites`)
            .then(res => {
                if (user) {
                    setUser({
                        ...user,
                        favorites_list: res.data.favorites_list
                    })
                }
            })
    }

    return (
        <ProfileContainer>
            {
                user ?
                    <ProfileContentContainer>
                        <div className='flex flex-col gap-y-4 py-8 px-2'>
                            <div>
                                <TabContentTitle title='favorites list' className='mb-10' />
                                <Divider />
                            </div>
                            <div className='grid grid-cols-2 w-full'>
                                {
                                    // empty data
                                    user.favorites_list.length < 1 ?
                                        <div className='text-gray-700 text-base capitalize py-7 px-2'>
                                            <p>favorites list is empty</p>
                                        </div> :

                                        // correct data
                                        user.favorites_list.map((item, index) =>
                                            <section
                                                key={index * 71}
                                                className="py-4 px-3 odd:border-r even:border-r-0 border-gray-100 border-solid border-l-0 border-t-0 border-b hover:shadow-md transition-shadow duration-500 w-full"
                                            >
                                                {/* image */}
                                                <Link href={`/product/${item.slug}`} className="flex flex-col gap-y-8 w-full">
                                                    <div className='w-full flex justify-center'>
                                                        <Image
                                                            src={item.image}
                                                            alt={item.title}
                                                            width={140}
                                                            height={140}
                                                            className="object-contain"
                                                        />
                                                    </div>

                                                    {/* title */}
                                                    <div className='w-full h-10 overflow-hidden'>
                                                        <h5 className='ellipsis-2 text-gray-700 text-sm font-[500]'>
                                                            {item.title}
                                                        </h5>
                                                    </div>

                                                    {/* price section */}
                                                    <div className='flex flex-col gap-y-2'>
                                                        <div className='flex justify-between'>
                                                            <Price price={item.sellers[0].variants[0].price} />
                                                            {
                                                                item.sellers[0].variants[0].discount_percentage &&
                                                                <DiscountPercentage discount={item.sellers[0].variants[0].discount_percentage} />
                                                            }
                                                        </div>
                                                        {
                                                            item.sellers[0].variants[0].old_price &&
                                                            <OldPrice oldPrice={item.sellers[0].variants[0].old_price} />
                                                        }
                                                    </div>
                                                </Link>

                                                {/* remove from favorites button */}
                                                <div className='mt-8'>
                                                    <Button
                                                        variant="outlined"
                                                        size='small'
                                                        className="font-[500]"
                                                        color="neutral"
                                                        onClick={() => handleClick(item._id)}
                                                    >
                                                        remove from favorites
                                                    </Button>
                                                </div>
                                            </section>
                                        )
                                }
                            </div>
                        </div>
                    </ProfileContentContainer>
                    :
                    // loading data
                    <div className='grid grid-cols-2'>
                        {
                            [...Array(8)].map((item, index) =>
                                <div
                                    key={index * 77}
                                    className="odd:border-r even:border-r-0 border-gray-100 border-solid border-l-0 border-t-0 border-b"
                                >
                                    <ProductSkeleton />
                                </div>
                            )
                        }
                    </div>
            }
        </ProfileContainer>
    )
}

export default Lists