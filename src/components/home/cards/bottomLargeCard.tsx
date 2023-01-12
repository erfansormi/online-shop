import React from 'react';

// components
import Layout from '../../layout/layout'
import LargeCards from '../../utils/card/largeCards';

// images data
import { LargeCardsData } from '../../utils/card/largeCards';

const data: LargeCardsData[] = [
    {
        src: "/images/banner1.jpg",
        alt: "smart phone",
        object: "cover"
    },
    {
        src: "/images/banner2.jfif",
        alt: "hard ssd",
        object: "cover"
    }
]

const BottomLargeCards = () => {
    return (
        <Layout>
            <LargeCards data={data} />
        </Layout>
    )
}

export default BottomLargeCards