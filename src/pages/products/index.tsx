import React, { useState, useContext, createContext } from 'react';
import { GetStaticProps } from 'next';

// data
import { SortBy, sortByData, sortByCheapest, sortByRelevant, sortByExpensivest, sortByBestSeller, sortBySuggestion } from '../../components/products/productsData';

// components
import Layout from '../../components/layout/layout';
import ProductsCard from '../../components/products/productsCard';

// icons
import { BiSortDown } from 'react-icons/bi';
import { useFetch } from '../../hooks/fetcher/useFetch';
import { Product } from '../../types/product/productTypes';

// types
interface Data {
    products: Product[],
    success: true
}

interface Props {
    data: Data
    error: string,
}

// context
const ProductContext = createContext({} as Data);
export const useProductsContext = () => useContext(ProductContext);

const Products = ({ data, error }: Props) => {
    const [sortBy, setSortBy] = useState<SortBy>("most relevant");    

    return (
        <ProductContext.Provider value={data}>
            <Layout max_w_3xl>

                {/* sort */}
                <div className='py-6 px-3 flex flex-wrap gap-x-6 gap-y-4 items-center capitalize text-sm'>
                    <span className='flex gap-x-1 items-center'>
                        <BiSortDown className="text-3xl" />
                        <span>
                            sort by
                        </span>
                    </span>
                    {
                        sortByData.map((item, index) =>
                            <span
                                key={index * 30}
                                className={`cursor-pointer ${item.title === sortBy ? "text-rose-500" : "text-gray-500"}`}
                                onClick={() => setSortBy(item.title)}
                            >
                                {item.title}
                            </span>
                        )
                    }
                </div>

                {/* products */}
                <div className='border-t-2 border-b-0 border-x-0 border-solid border-gray-200 grid max-[350px]:grid-cols-1 grid-cols-2 min-[670px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                    {
                        sortBy === "most relevant" ?
                            <ProductsCard products={sortByRelevant(data.products)} /> :
                            sortBy === "cheapest" ?
                                <ProductsCard products={sortByCheapest(data.products)} /> :
                                sortBy === "expensivest" ?
                                    <ProductsCard products={sortByExpensivest(data.products)} /> :
                                    sortBy === "best seller" ?
                                        <ProductsCard products={sortByBestSeller(data.products)} /> :
                                        sortBy === "Buyers' suggestion" &&
                                        <ProductsCard products={sortBySuggestion(data.products)} />
                    }
                </div>
            </Layout >
        </ProductContext.Provider>
    )
}

export default Products;

export const getStaticProps: GetStaticProps = async () => {
    const { data, error } = await useFetch("products");

    return {
        props: {
            data,
            error
        },
        revalidate: 60 * 60 * 24
    }
}