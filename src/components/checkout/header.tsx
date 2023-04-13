import React from 'react'
import Link from "next/link";

// icons
import { BsCart3 } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdPayment } from 'react-icons/md';

const CheckoutHeader = ({ type }: { type: "shipping" | "checkout" }) => {
    return (
        <header className='border border-gray-200 border-solid p-12 rounded-lg flex flex-col gap-y-10'>
            <div className='text-center'>
                <Link href={"/"}>
                    <h2 className='text-rose-500 text-3xl font-bold'>
                        Online Shop
                    </h2>
                </Link>
            </div>
            <div className='flex items-center justify-center gap-x-6 text-rose-500 text-lg leading-8 capitalize font-medium'>
                <Link href={"/cart"}>
                    <div className='flex items-center gap-x-2 opacity-60'>
                        <span className='flex text-2xl'>
                            <BsCart3 />
                        </span>
                        <span>
                            cart
                        </span>
                        <hr className='w-28 border-rose-500 border-solid mx-2 mt-1 border-b-0' />
                    </div>
                </Link>

                <Link href="/checkout/shipping">
                    <div className={`flex items-center gap-x-2 ${type === "shipping" ? "scale-125 mx-2" : "opacity-60"}`}>
                        <span className='flex text-3xl'>
                            <TbTruckDelivery />
                        </span>
                        <span>
                            shipping time
                        </span>
                    </div>
                </Link>

                <div className={`flex items-center gap-x-2 ${type === 'checkout' ? "text-rose-500" : "text-gray-400"}`}>
                    <hr className={`w-28 ${type === "checkout" ? "border-rose-500" : "border-gray-300"}  border-solid mx-2 mt-1 border-b-0`} />
                    <div className={`flex items-center gap-x-2 ${type === "checkout" ? "scale-125 ml-2" : ""}`}>
                        <span className='flex text-2xl'>
                            <MdPayment />
                        </span>
                        <span>
                            payment
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default CheckoutHeader;