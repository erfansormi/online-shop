import React, { useContext, createContext } from 'react'
import { GetStaticProps } from "next";
import Link from 'next/link';
import Image from 'next/image';

// types
import { Product } from "../../redux/data/dataSlice";

interface Props {
    products: Product[]
}

// context
const ProductsContext = createContext({} as Product[]);
export const useProductsContext = () => useContext(ProductsContext);

// icons
import { BsStarFill } from 'react-icons/bs';

// components
import Layout from "../../components/layout/layout";
import Price from '../../components/utils/price/price';
import DiscountPercentage from '../../components/utils/price/discountPercentage';
import OldPrice from '../../components/utils/price/oldPrice';

const Products = ({ products }: Props) => {
    return (
        <ProductsContext.Provider value={products} >
            <Layout max_w_3xl>
                <div className='grid max-[400px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                    {products.map((item, index) =>
                        <div
                            key={index * 17}
                            className="border-solid border-x border-b-2 border-t-0 border-gray-100 hover:shadow-lg transition-shadow duration-300"
                        >
                            <Link
                                href={`/product/${item.id}`}
                                className="flex flex-col px-3 py-6 md:py-10"
                            >

                                {/* image */}
                                <div className='h-48 w-full flex justify-center mb-10'>
                                    <div className='w-3/5 sm:w-4/5 h-full relative'>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className='object-contain'
                                        />
                                    </div>
                                </div>

                                {/* title */}
                                <div className='h-10 mb-3.5'>
                                    <h3 className='text-sm normal-case font-bold text-gray-700 h-full ellipsis-2'>
                                        {item.title}
                                    </h3>
                                </div>

                                {/* rating */}
                                <div className='flex items-center gap-2 mb-3.5'>
                                    <span className='flex text-yellow-400'>
                                        <BsStarFill />
                                    </span>
                                    <span className="text-sm">
                                        {item.rating.rate}
                                    </span>
                                </div>

                                {/* price section */}
                                <div className='flex items-center justify-between'>

                                    {/* new price */}
                                    <Price price={Number((item.price * (100 - (item.rating.count / 100))) / 100)} />

                                    {/* discount percentage */}
                                    <DiscountPercentage discount={item.rating.count / 100} />
                                </div>

                                {/* old price */}
                                {
                                    <div className='mt-1.5'>
                                        <OldPrice oldPrice={item.price} />
                                    </div>
                                }
                            </Link>
                        </div>
                    )}
                </div>
            </Layout >
        </ProductsContext.Provider >
    )
}

export default Products;

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    return {
        props: {
            products,
        },
        revalidate: 60 * 60 * 24
    }
}