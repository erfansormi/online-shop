import React from 'react'

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// components
import SmallCard from '../card/smallCard';
import SeeAllProducts from '../card/seeAllProducts';

// types
import { Product } from '../../../types/product/productTypes';

interface Props {
    data: Product[]
}

const SmallCardSlider = ({ data }: Props) => {
    return (
        <div className='py-6 px-1 bg-rose-500 rounded-3xl overflow-hidden h-full'>
            <Swiper
                navigation={true}
                slidesPerView={"auto"}
                spaceBetween={3}
                modules={[Navigation]}
                className="mySwiper"
                centerInsufficientSlides={true}
                oneWayMovement={true}
            >
                {
                    data.map((item, index) =>
                        <SwiperSlide
                            key={index * 19}
                            className={`${index == 0 ? "rounded-l-lg" : ""} mr-[3px] shadow-lg overflow-hidden w-fit`}
                        >
                            <SmallCard
                                {...item}
                            />
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