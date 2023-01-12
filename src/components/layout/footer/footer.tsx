import React from 'react'
import Link from 'next/link';

// mui
import { Button, Divider, TextField } from '@mui/material'

// data
import { footerData, footerIcons } from './footerData';

// font
import { fredoka } from '../../../pages/_app';

const Footer = () => {
    return (
        <div className={`${fredoka.className} w-full capitalize`}>
            <Divider />
            <footer className='px-5 py-10 w-full text-gray-800'>
                <div className='flex w-full flex-wrap gap-y-10 gap-x-4 md:justify-between xl:justify-around 2xl:gap-16 2xl:justify-center'>

                    {/* footer lists */}
                    {
                        footerData.map((item, index) =>
                            <div key={index * 33} className="min-w-[210px]">
                                <h5 className='mb-4'>
                                    {item.title}
                                </h5>
                                <ul className='flex flex-col list-none'>
                                    {item.lists.map((list, index) =>
                                        <li
                                            key={index * 37}
                                            className="mb-2"
                                        >
                                            <Link
                                                href={list.link}
                                                className="text-gray-400 text-sm transition duration-300 hover:text-gray-600"
                                            >
                                                {list.text}
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )
                    }

                    {/* be with us */}
                    <div className='flex flex-col gap-8'>
                        <div>
                            <h5 className='mb-4'>be with us!</h5>
                            <div className='flex items-center gap-8'>
                                {
                                    footerIcons.map((item, index) =>
                                        <Link key={index * 39} className="flex" href="/" >
                                            <div className="text-3xl text-gray-400 flex transition duration-300 hover:text-gray-600">
                                                {item.icon}
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <h5 className='mb-4'>
                                Register your email to get the latest discounts
                            </h5>
                            <div className='flex gap-3'>
                                <TextField size='small' variant='filled' />
                                <Button variant="contained" size='small'>
                                    register
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer