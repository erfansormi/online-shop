import React, { LegacyRef, useRef, useState } from 'react';
import { Box, Divider, Tab, Tabs } from '@mui/material';
import TabContent from './tabContent';
import SellerBox from '../detail/sellerSection/sellerBox';
import ProductDescription from './description';
import Link from 'next/link';
import ProductComments from './comments';

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabsContainer = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    // refs
    type DesRef = LegacyRef<HTMLDivElement> | undefined;
    const descriptionRef: DesRef = useRef(null);
    const commentsRef: DesRef = useRef(null);

    return (
        <div className="flex flex-col gap-y-10">
            <Box className="sticky z-50 bg-white" sx={{ width: '100%', top: "var(--navbar-height)" }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="px-3">

                    {/* tabs */}
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab
                            label="Description"
                            {...a11yProps(0)}
                            onClick={() => descriptionRef.current?.scrollIntoView({ block: "center" })}
                        />
                        <Tab
                            label="Comments"
                            {...a11yProps(1)}
                            onClick={() => commentsRef.current?.scrollIntoView({ block: "center" })}
                        />
                    </Tabs>
                </Box>
            </Box>

            {/* tabs content */}
            <div className='flex gap-x-8'>

                <div className="w-full flex flex-col gap-y-14">

                    {/* description */}
                    <TabContent index={0} value={value}>
                        <ProductDescription descriptionRef={descriptionRef} />
                    </TabContent>

                    <Divider />

                    {/* comments */}
                    <TabContent index={1} value={value}>
                        <ProductComments commentsRef={commentsRef} />
                    </TabContent>
                </div>

                {/* seller box */}
                <div className="w-fit min-w-[340px] h-fit sticky right-6 top-1/3">
                    <SellerBox />
                </div>

            </div>
        </div>
    )
}

export default TabsContainer;