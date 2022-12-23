import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";

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
                        modules={[Pagination, Autoplay, Navigation]}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            waitForTransition: true,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            enabled: true,
                        }}
                        className="h-full shadow-lg"
                    >
                        {data?.map((item, index) =>
                            <SwiperSlide
                                key={index * 17}
                                className="w-full md:h-96 sm:h-72 h-48 xl:h-100 2xl:h-110"
                            >
                                <Image
                                    src={item.image}
                                    width={800}
                                    height={350}
                                    quality={45}
                                    priority
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