import React from 'react'
import { GetStaticProps } from 'next';
import { getDatabase, ref, child, get } from "firebase/database";
import { database } from '../firebase/app';
// ts
interface Props {
  products: any[],
  error: string
}

const Home = () => {
  return (
    <div>
    </div>
  )
}

export default Home;

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const error = res.ok ? "" : res.statusText;
//   const products = await res.json();

//   return {
//     props: {
//       products,
//       error
//     }
//   }
// }