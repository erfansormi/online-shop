import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import { Box, Divider, Tab, Tabs } from '@mui/material';
import TabContent from './tabContent';
import ProductDescription from './description';
import ProductComments from './comments';
import MiniBuyBox from './miniBuyBox';

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
    type DivRef = LegacyRef<HTMLDivElement> | undefined;
    const descriptionRef: DivRef = useRef(null);
    const commentsRef: DivRef = useRef(null);

    // data
    // tabs
    const tabsData = [
        {
            label: "Description",
            ref: descriptionRef
        },
        {
            label: "Comments",
            ref: commentsRef
        }
    ]

    // tabs content data
    const tabsContentData = [
        {
            components: ProductDescription,
            ref: descriptionRef
        },
        {
            components: ProductComments,
            ref: commentsRef
        }
    ]

    // handle active tab
    useEffect(() => {
        addEventListener("scroll", () => {
            if (commentsRef.current) {
                let { offsetTop, offsetHeight } = commentsRef.current;

                if (pageYOffset >= offsetTop - (offsetHeight + 200)) {
                    setValue(1)
                }
                else {
                    setValue(0)
                }
            }

        })
    }, [])

    return (
        <div className="flex flex-col gap-y-10">
            <Box className="sticky z-50 bg-white max-[767px]:top-0" sx={{ width: '100%', top: "var(--navbar-height)" }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="px-3">

                    {/* tabs */}
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        {
                            tabsData.map((item, index) =>
                                <Tab
                                    label={item.label}
                                    {...a11yProps(index)}
                                    onClick={() => item.ref.current?.scrollIntoView({ block: "center" })}
                                />
                            )
                        }
                    </Tabs>
                </Box>
            </Box>

            <div className='flex flex-col md:flex-row gap-8'>
                <div className="w-full flex flex-col gap-y-14">

                    {/* tabs content */}
                    {
                        tabsContentData.map((item, index) =>
                            <>
                                <div ref={item.ref}>
                                    <TabContent index={index} value={value}>
                                        <item.components />
                                    </TabContent>
                                </div>
                                {
                                    index !== tabsContentData.length - 1 &&
                                    <Divider />
                                }
                            </>
                        )
                    }

                </div>

                {/* seller box */}
                <div className="md:w-fit md:max-w-[330px] h-fit sticky right-6 top-1/3">
                    <MiniBuyBox />
                </div>
            </div>
        </div>
    )
}

export default TabsContainer;