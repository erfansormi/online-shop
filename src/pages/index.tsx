import React from 'react'
import { GetStaticProps } from 'next';

// fetch data
// import { fetchData } from '../components/home/fetchData/getHomeData';

// data
import { topSlidersData } from '../components/home/sliders/topSlidersData';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getSlidersData, getNewProductsData, getOffersData, getProductsData } from '../redux/data/dataSlice';
import { State } from "../redux/store";

// components
import SliderFullScreen from '../components/utils/sliders/sliderFullScreen';
import NewProducts from '../components/home/sliders/newProducts';
import SpecialOffers from '../components/home/sliders/specialOffers';
import MiddleLargeCards from '../components/home/cards/middleLargeCards';
import MiddleMediumCards from '../components/home/cards/middleMediumCards';

// types
import { Product } from '../redux/data/dataSlice';
import { Slider } from '../redux/data/dataSlice';
import Categories from '../components/home/categories/categories';

interface Props {
  products: Product[],
}

const Home = ({ products }: Props) => {
  // const sliders = useSelector((state: State) => state.data.sliders);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getSlidersData(topSlidersData))
    dispatch(getProductsData(products))
    dispatch(getNewProductsData(products.slice(0, 8)))
    dispatch(getOffersData(products.slice(8, 16)))
  }, [])

  return (
    <>
      <SliderFullScreen data={topSlidersData} />
      <NewProducts />
      <MiddleLargeCards />
      <SpecialOffers />
      <MiddleMediumCards />
      <Categories />
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  }
}