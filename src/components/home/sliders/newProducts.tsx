import React from 'react'

// components
import Layout from '../../layout/layout';
import SmallCardSlider from '../../utils/sliders/smallCardSlider';
import TitleSection from '../../utils/title/titleSection';
import LoadingAfterChngLink from '../../utils/loading/loadingAfterChngLink';

// context
import { useHomeContext } from '../../../pages';

const NewProducts = () => {
    const newProducts = useHomeContext().slice(0, 8);

    return (
        <Layout>
            <TitleSection title='newest products of the week' />
            <SmallCardSlider data={newProducts} />
            <LoadingAfterChngLink />
        </Layout>
    )
}

export default NewProducts;