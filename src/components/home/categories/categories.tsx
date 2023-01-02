import Image from 'next/image';
import React from 'react'

// components
import Layout from '../../layout/layout';
import TitleSection from '../../utils/title/titleSection';

// data
import { categoriesData } from "./categoriesData"

const Categories = () => {
    return (
        <Layout container>
            <TitleSection title='categories' textCenter />
            <div className='flex flex-wrap justify-center'>
                {categoriesData.map((item, index) =>
                    <section
                        key={index * 27}
                        className="flex w-56 flex-col items-center cursor-pointer mb-6"
                    >
                        <div className=''>
                            <Image
                                width={170}
                                height={170}
                                src={item.src}
                                alt={item.title}
                            />
                        </div>
                        <div>
                            <span className='text-gray-700 text-sm'>
                                {item.title}
                            </span>
                        </div>
                    </section>
                )}
            </div>
        </Layout>
    )
}

export default Categories