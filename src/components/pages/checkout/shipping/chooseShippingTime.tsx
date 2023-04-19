import React, { useState } from 'react'
import { DateObject } from 'react-multi-date-picker';

// checkout store
import useCheckout from '../../../../store/checkout';

// css
import styles from "./shippingTime.module.css";

// mui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const ChooseShippingTime = () => {
    const { setDeliveryHour, deliveryHour, setDeliveryDate } = useCheckout(state => state);

    // active tab
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    // date object
    const date = new DateObject()
    date.add(2, "days");

    // handle week days from 2 days later
    const handleWeekDays = () => {
        let arr = [];

        for (let index = date.weekDay.index; index <= 7; index++) {
            if (index === 7) {
                index = 0;
            }

            arr.push(date.weekDays[index]);

            if (arr.length === 5) {
                return arr;
            }
        }

        return arr;
    };

    return (
        <Box sx={{ width: '100%', overflow: "hidden" }}>
            <Box sx={{
                borderBottom: 1,
                borderColor: 'divider',
            }}>

                {/* tabs title */}
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    sx={{
                        "& .MuiButtonBase-root": {
                            minWidth: 40
                        }
                    }}
                >

                    {/* week days from 2 days later */}
                    {
                        handleWeekDays().map((item, index) =>
                            <Tab
                                label={item.name}
                                className='md:text-base text-sm'
                                {...a11yProps(index)}
                                key={index * 100}
                                icon={
                                    <span className="md:text-lg text-base">
                                        {date.day + index}
                                    </span>
                                }
                                iconPosition="bottom"
                            />
                        )
                    }
                </Tabs>
            </Box>

            {/* tabs content */}
            {
                [...Array(5)].map((item, index) =>
                    <TabPanel value={value} index={index} key={index * 101}>
                        <FormControl className='w-full'>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                onChange={(e) => {
                                    setDeliveryHour(e.target.value);
                                    setDeliveryDate(new Date(date.add(index, "day").format()));
                                }}
                                value={deliveryHour}
                            >
                                <FormControlLabel className='py-2 border-b-gray-100 w-full' value={`9am-12am-${index}`} control={<Radio color='info' />} label="9 am to 12 am" />
                                <FormControlLabel className='py-2 border-b-gray-100 w-full' value={`12am-3pm-${index}`} control={<Radio color='info' />} label="12 am to 3 pm" />
                                <FormControlLabel className='py-2 border-b-gray-100 w-full' value={`3pm-6pm-${index}`} control={<Radio color='info' />} label="3 pm to 6 pm" />
                                <FormControlLabel className='py-2 border-b-gray-100 w-full' value={`6pm-9pm-${index}`} control={<Radio color='info' />} label="6 pm to 9 pm" />
                            </RadioGroup>
                        </FormControl>
                    </TabPanel>
                )
            }
        </Box>
    );
}

export default ChooseShippingTime;

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            className={styles.tab_panel}
            {...other}
        >
            {value === index && (
                <div className='px-8 pt-2'>
                    {children}
                </div>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}