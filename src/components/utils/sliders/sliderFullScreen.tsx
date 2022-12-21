import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Autoplay } from "swiper";

// mui
import { Skeleton } from "@mui/material";

// types
interface Props {
    data: { image: string }[] | null
}

const SliderFullScreen = ({ data }: Props) => {
    return (
        <>
            {
                data ?
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        className="h-full"
                    >
                        {data?.map((item, index) =>
                            <SwiperSlide
                                key={index * 17}
                                className="w-full md:h-96 sm:h-80 h-48"
                            >
                                <img
                                    src={item.image}
                                    alt="slider"
                                    className="w-full object-cover h-full"
                                />
                            </SwiperSlide>
                        )}
                    </Swiper>
                    :
                    <Skeleton width={"100%"} height={420} variant="rectangular" />
            }
        </>
    );
}

export default SliderFullScreen;