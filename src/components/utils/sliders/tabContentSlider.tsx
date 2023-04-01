import React from 'react';
import Image from 'next/image';
import Link from "next/link";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// components
import Price from '../price/price';
import OldPrice from '../price/oldPrice';
import DiscountPercentage from '../price/discountPercentage';

// types
import { Product } from '../../../types/product/productTypes';
import TabContentTitle from '../../data_display/tabContentTitle';

interface Props {
    data: Product[],
    title: string
}

const TabContentSlider = ({ data, title }: Props) => {
    return (
        <div className='h-full py-6'>
            <div className='mt-2 px-4 mb-10'>
                <TabContentTitle title={title} />
            </div>
            <Swiper
                navigation={true}
                slidesPerView={"auto"}
                spaceBetween={3}
                modules={[Navigation]}
                className="mySwiper"
                centerInsufficientSlides={true}
            >
                <div className='h-full'>
                    {
                        data.map((item, index) =>
                            <SwiperSlide
                                key={index * 68}
                                className={`border-r last:border-r-0 border-solid border-y-0 border-l-0 border-gray-200 overflow-hidden w-48 h-auto`}
                            >
                                <Link
                                    href={`/product/${item.slug}`}
                                    className="flex flex-col h-full gap-y-2 py-8 px-3"
                                >

                                    {/* image */}
                                    <div className='flex justify-center'>
                                        <Image
                                            src={item.image}
                                            width={140}
                                            height={140}
                                            alt={item.title}
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* title */}
                                    <div className='ellipsis-2 w-full h-10 overflow-hidden'>
                                        <h4 className='text-gray-700 leading-5 text-[0.85rem]'>
                                            {item.title}
                                        </h4>
                                    </div>

                                    {/* price box */}
                                    <div className='mt-2.5 flex flex-col gap-y-3'>
                                        <div className='flex justify-between items-center'>
                                            <Price price={item.sellers[0].variants[0].price} className="text-[1.2rem]" />
                                            {
                                                item.sellers[0].variants[0].discount_percentage &&
                                                <DiscountPercentage
                                                    discount={item.sellers[0].variants[0].discount_percentage}
                                                />
                                            }
                                        </div>
                                        {
                                            item.sellers[0].variants[0].old_price &&
                                            <OldPrice oldPrice={item.sellers[0].variants[0].old_price} />
                                        }
                                    </div>

                                </Link>
                            </SwiperSlide>
                        )
                    }
                </div>
            </Swiper>
        </div>
    )
}

export default TabContentSlider;