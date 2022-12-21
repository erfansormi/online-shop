import React from 'react'

// components
import Layout from '../../layout/layout';
import SmallCardSlider from '../../utils/sliders/smallCardSlider';
import TitleSection from '../../utils/title/titleSection';

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../redux/store';

const NewProducts = () => {
    const newProducts = useSelector((state: State) => state.data.newProducts);

    return (
        <Layout>
            <TitleSection title='newest products of the week' />
            {
                newProducts ?
                    <SmallCardSlider data={newProducts} /> :
                    ""
            }
        </Layout>
    )
}

export default NewProducts;