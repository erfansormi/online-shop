import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react'

const PaymentMethod = () => {
    const [value, setValue] = React.useState('inPerson');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <div className='rounded-lg border-gray-200 border-solid border p-5'>
            <div className='flex flex-col gap-y-8 text-gray-700'>
                <div>
                    <h6 className='font-medium text-lg'>
                        choose payment method
                    </h6>
                </div>

                <div>
                    <FormControl>
                        <RadioGroup
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="online" control={<Radio />} label="Online Payment" disabled />
                            <FormControlLabel value="inPerson" control={<Radio />} label="Payment In Person" />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod;