import React from 'react'
import { GetStaticProps } from 'next';

// fetch data
// import { fetchData } from '../components/home/fetchData/getHomeData';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getSlidersData, getNewProductsData, getOffersData, getProductsData } from '../redux/data/dataSlice';
import { State } from "../redux/store";

// components
import SliderFullScreen from '../components/utils/sliders/sliderFullScreen';
import NewProducts from '../components/home/sliders/newProducts';
import SpecialOffers from '../components/home/sliders/specialOffers';

// types
import { Product } from '../redux/data/dataSlice';
import { Slider } from '../redux/data/dataSlice';

interface Props {
  sliders: Slider[],
  products: Product[],
  productsError: string,
  newProducts: Product[],
  specialOffers: Product[],
}

// commented props
// { newProducts, products, productsError, sliders, specialOffers }: Props

const Home = () => {
  const sliders = useSelector((state: State) => state.data.sliders);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // dispatch(getSlidersData(sliders))
    // dispatch(getNewProductsData(newProducts))
    // dispatch(getOffersData(specialOffers))
    // dispatch(getProductsData(products))

    // fetch("https://online-shop-d006c-default-rtdb.asia-southeast1.firebasedatabase.app/sliders.json")
    //   .then(res => res.json())
    //   .then(json => dispatch(getSlidersData(json)))

    // fetch("https://online-shop-d006c-default-rtdb.asia-southeast1.firebasedatabase.app/newProducts.json")
    //   .then(res => res.json())
    //   .then(json => dispatch(getNewProductsData(json)))

    // fetch("https://online-shop-d006c-default-rtdb.asia-southeast1.firebasedatabase.app/offerProducts.json")
    //   .then(res => res.json())
    //   .then(json => dispatch(getOffersData(json)))
  }, [])

  return (
    <>
      <SliderFullScreen data={sliders} />
      <NewProducts />
      <SpecialOffers />
    </>
  )
}

export default Home;

// به دلیل تحریم بودن فایربیس، موقع بیلد گرفتن از پروژه به ارور خواهیم خورد و هنگام توسعه برنامه، کد پایین به صورت کامنت خواهد بود و هنگام دیپلای از ورسل استفاده خواهد شد
// export const getStaticProps: GetStaticProps = async () => {
//   const { products, productsError, newProducts, sliders, specialOffers } = await fetchData();

//   return {
//     props: {
//       sliders,
//       products,
//       productsError,
//       newProducts,
//       specialOffers
//     },
//   }
// }