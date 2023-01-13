import React, { UIEvent, useState } from 'react'
import Image from 'next/image';

// react draggable
import Draggable from 'react-draggable';

// components
import Layout from '../layout/layout'

// icon
import { FaArrowsAltH } from "react-icons/fa";
import { Button } from '@mui/material';

const BeforeAndAfter = () => {
    const [x, setX] = useState<null | number>(null);
    const [width, setWidth] = useState(
        typeof window !== "undefined" ?
            window.innerWidth : 768
    )

    const handleWidth = () => {
        if (typeof window !== "undefined") {
            setWidth(window.innerWidth);
        }
        else {
            return null;
        }
    }

    React.useEffect(() => {
        handleWidth();
        addEventListener("resize", handleWidth)
    }, [])

    return (
        <Layout>
            <div className='overflow-hidden relative w-full h-[380px] border-solid border-gray-600 rounded-lg border-2'>

                {/* title */}
                <div className='absolute top-2 left-2 flex flex-col items-center justify-center z-50 w-full'>
                    <h4 className='bg-[#fff] text-2xl w-fit text-rose-600'>
                        update your shoes!
                    </h4>
                    <span className='text-xs bg-[#fff] text-gray-500'>
                        change position bottom pictures!
                    </span>
                </div>

                {/* draggable center arrow */}
                <Draggable
                    axis='x'
                    bounds="parent"
                    handle={'.dragg-arrow'}

                    // get x position with react draggable or mouse position 
                    onDrag={(e: any) => {
                        if (width > 768) {
                            setX(e.clientX - 25)
                        }
                        else {
                            setX(e.target.getBoundingClientRect().x + 5);
                        }
                    }}
                >
                    <div
                        className={`z-40 inset-x-1/2 absolute top-0 bottom-0 h-full w-1 bg-gray-500 flex flex-col justify-center items-center`}
                        id="dragg-container"
                    >
                        <span>
                            <FaArrowsAltH className='cursor-ew-resize text-3xl dragg-arrow text-gray-500' />
                        </span>
                    </div>
                </Draggable>

                {/* images */}
                <div className='flex w-full h-full'>
                    <div className='absolute inset-0 w-full h-full overflow-hidden'>
                        <Image
                            className='object-contain w-[95vw] h-full'
                            width={850}
                            height={400}
                            src="/images/old-shoe1.png"
                            alt="old shoe"
                        />
                    </div>
                    <div className={`bg-[#fff] absolute inset-0 w-full h-full overflow-hidden`} style={{ width: x ? x : "50%" }}>
                        <Image
                            className='object-contain w-[95vw] h-full'
                            width={850}
                            height={400}
                            src="/images/new-shoe1.png"
                            alt="new shoe"
                        />
                    </div>
                </div>

                {/* button */}
                <div className='z-50 absolute bottom-2 w-full flex justify-center'>
                    <Button variant="contained">
                        click for buy
                    </Button>
                </div>
            </div>
        </Layout >
    )
}

export default BeforeAndAfter