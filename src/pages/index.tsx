import React from 'react'
import { GetStaticProps } from 'next';

// fetch data
import { fetchProductsData, fetchSlidersData } from '../components/home/fetchData/getHomeData';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getSlidersData, getNewProductsData } from '../redux/data/dataSlice';
import { State } from "../redux/store";

// components
import SliderFullScreen from '../components/utils/sliders/sliderFullScreen';
import NewProducts from '../components/home/sliders/newProducts';

// types
interface Props {
  sliders: any[],
  sliderError: string,
  products: any[],
  productsError: string
}

const Home = () => {
  const sliders = useSelector((state: State) => state.data.sliders);
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch("https://online-shop-d006c-default-rtdb.asia-southeast1.firebasedatabase.app/sliders.json")
      .then(res => res.json())
      .then(json => dispatch(getSlidersData(json)))

    fetch("https://online-shop-d006c-default-rtdb.asia-southeast1.firebasedatabase.app/newProducts.json")
      .then(res => res.json())
      .then(json => dispatch(getNewProductsData(json)))
  }, [])

  return (
    <>
      <SliderFullScreen data={sliders} />
      <NewProducts />
    </>
  )
}

export default Home;

// به دلیل تحریم بودن فایربیس، موقع بیلد گرفتن از پروژه به ارور خواهیم خورد و هنگام توسعه برنامه، کد پایین به صورت کامنت خواهد بود و هنگام دیپلای از ورسل استفاده خواهد شد
// export const getStaticProps: GetStaticProps = async () => {
//   // const { slidersError, sliders } = await fetchSlidersData();
//   // const { products, productsError } = await fetchProductsData();
//   const res = await fetch("https://online-shop-d006c-default-rtdb.asia-southeast1.firebasedatabase.app/products.json")
//   const products = await res.json();

//   return {
//     props: {
//       // sliders,
//       // slidersError,
//       products,
//       // productsError
//     },
//   }
// }