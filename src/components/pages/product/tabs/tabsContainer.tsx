import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import { Box, Divider, Tab, Tabs } from '@mui/material';
import TabContentContainer from './tabsContent/tabContentContainer';
import ProductDescription from './tabsContent/description/description';
import CommentsContainer from './tabsContent/comments/commentsContainer';
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
            components: CommentsContainer,
            ref: commentsRef
        }
    ]

    // handle active tab
    useEffect(() => {
        addEventListener("scroll", () => {
            if (commentsRef.current) {
                let { offsetTop, offsetHeight } = commentsRef.current;

                if (pageYOffset >= offsetTop - offsetHeight) {
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
            <Box className="sticky z-40 bg-white max-[767px]:top-0" sx={{ width: '100%', top: "var(--navbar-height)" }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="px-3">

                    {/* tabs title */}
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        {
                            tabsData.map((item, index) =>
                                <Tab
                                    key={index * 50}
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
                <div className="w-full flex flex-col gap-y-12">

                    {/* tabs content */}
                    {
                        tabsContentData.map((item, index) =>
                            <div key={index * 53}>
                                <div ref={item.ref}>
                                    <TabContentContainer index={index} value={value}>
                                        <item.components />
                                    </TabContentContainer>
                                </div>
                                {
                                    index !== tabsContentData.length - 1 &&
                                    <Divider />
                                }
                            </div>
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