import React from 'react'

// context
import { useHomeContext } from '../../../pages'

// components
import Layout from '../../layout/layout'
import SmallCardSlider from '../../utils/sliders/smallCardSlider'
import TitleSection from '../../utils/title/titleSection'

const SpecialOffers = () => {
    const offers = useHomeContext().slice(8, 16);

    return (
        <Layout>
            <TitleSection title='special offers' />
            <SmallCardSlider data={offers} />
        </Layout>
    )
}

export default SpecialOffers