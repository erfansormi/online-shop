import React from 'react';

// components
import Layout from '../../../layout/layout';
import LargeCards from '../../../utils/card/largeCards';

// images data
import { LargeCardsData } from '../../../utils/card/largeCards';

const data: LargeCardsData[] = [
    {
        src: "/images/card1.avif",
        alt: "smart phone",
    },
    {
        src: "/images/card2.avif",
        alt: "hard ssd",
    }
]

const MiddleLargeCards = () => {
    return (
        <Layout>
            <LargeCards data={data} />
        </Layout>
    )
}

export default MiddleLargeCards