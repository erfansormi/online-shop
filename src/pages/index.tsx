import React, { useContext, createContext } from 'react'
import { GetStaticProps } from 'next';

// data
import { topSlidersData } from '../components/pages/home/sliders/topSlidersData';

// components
import SliderFullScreen from '../components/utils/sliders/sliderFullScreen';
import CheapestProducts from '../components/pages/home/sliders/cheapestProducts';
import SpecialOffers from '../components/pages/home/sliders/specialOffers';
import MiddleLargeCards from '../components/pages/home/cards/middleLargeCards';
import MiddleMediumCards from '../components/pages/home/cards/middleMediumCards';
import Categories from '../components/pages/home/categories/categories';
import BottomLargeCards from '../components/pages/home/cards/bottomLargeCard';
import BeforeAndAfter from '../components/pages/home/beforeAndAfter';

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
}

//context
const HomePage = createContext({} as HomeData);
export const useHomeContext = () => useContext(HomePage);

const Home = ({ data }: Props) => {
  return (
    <HomePage.Provider value={data}>
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
  const res = await fetch(`${process.env.URL}/api/v1/home-data`);
  const data = await res.json();


  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
}