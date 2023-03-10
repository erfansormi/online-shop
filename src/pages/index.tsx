import React, { useContext, createContext } from 'react'
import Head from 'next/head';

// data
import { topSlidersData } from '../components/home/sliders/topSlidersData';

// components
import SliderFullScreen from '../components/utils/sliders/sliderFullScreen';
import CheapestProducts from '../components/home/sliders/cheapestProducts';
import SpecialOffers from '../components/home/sliders/specialOffers';
import MiddleLargeCards from '../components/home/cards/middleLargeCards';
import MiddleMediumCards from '../components/home/cards/middleMediumCards';
import Categories from '../components/home/categories/categories';
import BottomLargeCards from '../components/home/cards/bottomLargeCard';
import BeforeAndAfter from '../components/home/beforeAndAfter';
import { GetStaticProps } from 'next';

// data fetcher
import { useFetch } from '../hooks/fetcher/useFetch';

// types
import { Product } from '../types/product/productTypes';

interface HomeData {
  success: boolean;
  most_discount: Product[];
  cheapest: Product[];
  highest_rate: Product[];
}

interface Props {
  data: HomeData
  error: string,
}

//context
const HomePage = createContext({} as HomeData);
export const useHomeContext = () => useContext(HomePage);

const Home = ({ data, error }: Props) => {
  return (
    <HomePage.Provider value={data}>
      <Head>
        <title>Home</title>
      </Head>
      <SliderFullScreen data={topSlidersData} />
      <SpecialOffers />
      <MiddleLargeCards />
      <BeforeAndAfter />
      <CheapestProducts />
      <MiddleMediumCards />
      <Categories />
      <BottomLargeCards />
    </HomePage.Provider>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await useFetch("home-data");

  return {
    props: {
      data,
      error
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
}