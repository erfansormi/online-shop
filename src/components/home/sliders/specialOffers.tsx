import React from 'react'

// context
import { useHomeContext } from '../../../pages'

// components
import Layout from '../../layout/layout'
import SmallCardSlider from '../../utils/sliders/smallCardSlider'
import TitleSection from '../../utils/title/titleSection'

const SpecialOffers = () => {
    const { most_discount } = useHomeContext();

    return (
        <Layout>
            <TitleSection title='special offers' />
            <SmallCardSlider data={most_discount} />
        </Layout>
    )
}

export default SpecialOffers