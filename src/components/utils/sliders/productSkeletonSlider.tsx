import React from 'react'

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// mui
import ProductSkeleton from '../loading/productSkeleton';
import TabContentTitle from '../../data_display/tabContentTitle';

const ProductSkeletonSlider = ({ title }: { title?: string }) => {
    return (
        <div>
            {
                title &&
                <div className='mt-8 ml-4'>
                    <TabContentTitle title={title} className='mb-3' />
                </div>
            }
            <Swiper
                navigation={true}
                slidesPerView={"auto"}
                spaceBetween={3}
                modules={[Navigation]}
                className="mySwiper py-6"
                centerInsufficientSlides={true}
            >
                {
                    [...Array(10)].map((item, index) =>
                        <SwiperSlide key={index * 71} className="flex justify-center w-40 border-r last:border-r-0 border-gray-200 border-l-0 border-y-0 border-solid">
                            <ProductSkeleton />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}

export default ProductSkeletonSlider;