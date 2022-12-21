import React from 'react'

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// components
import SmallCard from '../smallCard/smallCard';

// types
import { Product } from '../../../redux/data/dataSlice';

interface Props {
    data: Product[]
}

const SmallCardSlider = ({ data }: Props) => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    250: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                    },
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1260: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    }
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    data.map((item, index) =>
                        <SwiperSlide
                            key={index * 19}
                            className="rounded-xl shadow-xl overflow-hidden"
                        >
                            <SmallCard
                                image={item.image}
                                price={item.price}
                                title={item.title}
                                id={item.id}
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    )
}

export default SmallCardSlider;