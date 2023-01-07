import React from 'react';
import Image from 'next/image';

// components
import Layout from '../../layout/layout';
import Link from 'next/link';

// data
const data = [
    {
        src: "adidas1.webp",
        alt: "adidas shoe",
        text: "Discount up to 30%",
        des: "Don't worry about this quality!",
    },
    {
        src: "nike1.webp",
        alt: "nike ball",
        text: "Discount up to 25%",
        des: "A completely standard ball!",
    },
    {
        src: "watch2.png",
        alt: "huawei watch",
        text: "Discount up to 15%",
        des: "High quality moments!",

    },
    {
        src: "airpod1.jpg",
        alt: "huawei airpod",
        text: "Discount up to 20%",
        des: "Clear sound experience!",
    },
]

const MiddleMediumCards = () => {
    return (
        <Layout>
            <div className='grid sm:grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6'>
                {
                    data.map((item, index) =>
                        <div
                            key={index * 23}
                            className="h-full w-full rounded-lg overflow-hidden shadow-md"
                        >
                            <Link href={"#"} className="w-full h-full relative flex">
                                <Image
                                    width={350}
                                    height={300}
                                    src={`/images/${item.src}`}
                                    alt={item.alt}
                                    className={`object-contain h-64 w-full`}
                                    quality={75}
                                />
                                <div className='absolute bottom-3 flex flex-col px-4'>
                                    <span className='font-bold text-gray-600'>
                                        {item.text}
                                    </span>
                                    <span className='text-sm text-gray-500'>
                                        {item.des}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
        </Layout>
    )
}

export default MiddleMediumCards