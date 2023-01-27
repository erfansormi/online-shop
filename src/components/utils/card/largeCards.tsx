import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// components
import Layout from '../../layout/layout'

// types
export interface LargeCardsData {
    src: string,
    alt: string,
}

interface Props {
    data: LargeCardsData[]
}

const LargeCards = ({ data }: Props) => {
    return (
        <Layout>
            <div className='grid lg:grid-cols-2 lg:gap-6 grid-cols-1 gap-4'>
                {
                    data.map((item, index) =>
                        <Link href='/' key={index * 29}>
                            <div className='shadow-lg rounded-lg overflow-hidden h-full'>
                                <Image
                                    className={`w-full h-72 2xl:object-contain md:object-cover object-contain flex`}
                                    width={500}
                                    height={200}
                                    alt={item.alt}
                                    src={item.src}
                                    quality={100}
                                />
                            </div>
                        </Link>
                    )
                }
            </div>
        </Layout>
    )
}

export default LargeCards;