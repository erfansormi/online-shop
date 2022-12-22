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
        <div className='py-6 px-1 bg-rose-500 rounded-3xl overflow-hidden'>
            <Swiper
                navigation={true}
                slidesPerView={"auto"}
                spaceBetween={5}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    data != null ?
                        data.map((item, index) =>
                            <SwiperSlide
                                key={index * 19}
                                className="rounded-lg shadow-lg overflow-hidden w-fit"
                            >
                                <SmallCard
                                    image={item.image}
                                    price={item.price}
                                    title={item.title}
                                    id={item.id}
                                    discountPercentage={item.discountPercentage}
                                />
                            </SwiperSlide>
                        )
                        :
                        // loading skeleton
                        [...Array(8)].map((item, index) =>
                            <SwiperSlide key={index} className="rounded-lg shadow-lg overflow-hidden w-fit">
                                <Skeleton className='w-48 h-60' variant='rectangular' />
                            </SwiperSlide>
                        )
                }
                <SwiperSlide className="rounded-lg shadow-lg overflow-hidden w-fit">
                    <SeeAllProducts />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SmallCardSlider;