import React from 'react'

// components
import Layout from '../../layout/layout';
import SmallCardSlider from '../../utils/sliders/smallCardSlider';
import TitleSection from '../../utils/title/titleSection';

// context
import { useHomeContext } from '../../../pages';

const CheapestProducts = () => {
    const { cheapest } = useHomeContext();

    return (
        <Layout>
            <TitleSection title='cheapest products of the week' />
            <SmallCardSlider data={cheapest} />
        </Layout>
    )
}

export default CheapestProducts;