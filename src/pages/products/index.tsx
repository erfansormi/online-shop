import React, { useState } from 'react';

// data
import { SortBy, sortByData, sortByCheapest, sortByRelevant, sortByExpensivest, sortByBestSeller, sortBySuggestion } from '../../components/products/productsData';

// components
import Layout from '../../components/layout/layout';
import ProductsCard from '../../components/products/productsCard';
import LoadingAfterChngLink from '../../components/utils/loading/loadingAfterChngLink';

// icons
import { BiSortDown } from 'react-icons/bi';

// types
import { Product } from '../../redux/data/dataSlice';

interface Props {
    products: Product[]
}

const Products = ({ products }: Props) => {
    const [sortBy, setSortBy] = useState<SortBy>("most relevant");

    return (
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
            <div className='border-t-2 border-b-0 border-x-0 border-solid border-gray-200 grid max-[400px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {
                    sortBy === "most relevant" ?
                        <ProductsCard products={sortByRelevant(products)} /> :
                        sortBy === "cheapest" ?
                            <ProductsCard products={sortByCheapest(products)} /> :
                            sortBy === "expensivest" ?
                                <ProductsCard products={sortByExpensivest(products)} /> :
                                sortBy === "best seller" ?
                                    <ProductsCard products={sortByBestSeller(products)} /> :
                                    sortBy === "Buyers' suggestion" &&
                                    <ProductsCard products={sortBySuggestion(products)} />
                }
            </div>
            <LoadingAfterChngLink />
        </Layout >
    )
}

export default Products;

export const getStaticProps = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    return {
        props: { products },
        revalidate: 60 * 60 * 24
    }
}