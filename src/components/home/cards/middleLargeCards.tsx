import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// components
import Layout from '../../layout/layout'

const MiddleLargeCards = () => {
    return (
        <Layout>
            <div className='grid lg:grid-cols-2 lg:gap-6 grid-cols-1 gap-4'>
                <Link href='#'>
                    <div className='shadow-lg rounded-lg overflow-hidden h-full'>
                        <Image
                            className='w-full h-72 object-contain flex'
                            width={500}
                            height={200}
                            alt={"ads card"}
                            src={"/images/card1.avif"}
                            quality={100}
                        />
                    </div>
                </Link>
                <Link href='#'>
                    <div className='shadow-lg rounded-lg overflow-hidden h-full'>
                        <Image
                            className='w-full h-72 object-contain flex'
                            width={500}
                            height={200}
                            alt={"ads card"}
                            src={"/images/card2.avif"}
                            quality={100}
                        />
                    </div>
                </Link>
            </div>
        </Layout>
    )
}

export default MiddleLargeCards