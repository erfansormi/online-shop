import React from 'react'

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// components
import SmallCard from '../card/smallCard';

// mui
import { Skeleton } from '@mui/material';

// types
import { Product } from '../../../redux/data/dataSlice';
import SeeAllProducts from '../card/seeAllProducts';

interface Props {
    data: Product[] | null
}

const SmallCardSlider = ({ data }: Props) => {
    return (
        <div className='py-6 px-1 bg-rose-500 rounded-3xl overflow-hidden h-full'>
            <Swiper
                navigation={true}
                slidesPerView={"auto"}
                spaceBetween={data ? 3 : 15}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    data != null ?
                        data.map((item, index) =>
                            <SwiperSlide
                                key={index * 19}
                                className={`${index == 0 ? "rounded-l-lg" : ""} shadow-lg overflow-hidden w-fit`}
                            >
                                <SmallCard
                                    {...item}
                                />
                            </SwiperSlide>
                        )
                        :
                        // loading skeleton
                        [...Array(8)].map((item, index) =>
                            <SwiperSlide key={index} className={`${index == 0 ? "rounded-l-lg" : ""} shadow-lg overflow-hidden w-48`}>
                                <Skeleton className='w-full' height={"16rem"} variant='rectangular' />
                            </SwiperSlide>
                        )
                }
                <SwiperSlide className="rounded-r-lg shadow-lg overflow-hidden w-fit h-full">
                    <SeeAllProducts />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SmallCardSlider;