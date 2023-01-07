import React from 'react'

// redux
import { useSelector } from 'react-redux'
import { State } from '../../../redux/store'

// components
import Layout from '../../layout/layout'
import SmallCardSlider from '../../utils/sliders/smallCardSlider'
import TitleSection from '../../utils/title/titleSection'

const SpecialOffers = () => {
    const offers = useSelector((state: State) => state.data.offers)

    return (
        <Layout>
            <TitleSection title='special offers' />
            <SmallCardSlider data={offers} />
        </Layout>
    )
}

export default SpecialOffers