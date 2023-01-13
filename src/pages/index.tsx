import React, { createContext, useContext } from 'react'
import { GetStaticProps } from 'next';
import Head from 'next/head';

// data
import { topSlidersData } from '../components/home/sliders/topSlidersData';

// redux
import { useDispatch } from 'react-redux';
import { getSlidersData } from '../redux/data/dataSlice';

// components
import SliderFullScreen from '../components/utils/sliders/sliderFullScreen';
import NewProducts from '../components/home/sliders/newProducts';
import SpecialOffers from '../components/home/sliders/specialOffers';
import MiddleLargeCards from '../components/home/cards/middleLargeCards';
import MiddleMediumCards from '../components/home/cards/middleMediumCards';
import Categories from '../components/home/categories/categories';
import BottomLargeCards from '../components/home/cards/bottomLargeCard';
import BeforeAndAfter from '../components/home/beforeAndAfter';

// types
import { Product } from '../redux/data/dataSlice';

interface Props {
  products: Product[],
}

// context
export const HomeContext = createContext({} as Product[]);
export const useHomeContext = () => useContext(HomeContext);

const Home = ({ products }: Props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getSlidersData(topSlidersData));
  }, [dispatch])

  return (
    <HomeContext.Provider value={products}>
      <Head>
        <title>Home</title>
      </Head>
      <SliderFullScreen data={topSlidersData} />
      <NewProducts />
      <MiddleLargeCards />
      <BeforeAndAfter />
      <SpecialOffers />
      <MiddleMediumCards />
      <Categories />
      <BottomLargeCards />
    </HomeContext.Provider>
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