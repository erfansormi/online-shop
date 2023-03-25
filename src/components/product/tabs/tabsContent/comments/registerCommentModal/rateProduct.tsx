import React, { useState } from 'react';

// types
import { FormikProps } from 'formik';
import { CommentInitialValues } from './registerCommentData';

// components
import { Rating } from '@mui/material';
import Label from '../../../../../data_display/label';
import InputError from '../../../../../form/input/inputError';

const RateProduct = ({ setFieldValue, errors, submitCount, handleBlur, values }: FormikProps<CommentInitialValues>) => {
    const [rating, setRating] = useState<number | null>(values.rate);

    return (
        <div className='flex flex-col gap-y-2'>
            <Label label={'give rating'} required />
            <Rating
                style={{ marginLeft: -5 }}
                size="large"
                name='rate'
                onChange={(e, index: any) => {
                    setRating(index)
                    setFieldValue("rate", index === null ? 0 : index);
                }}
                onBlur={handleBlur}
                value={rating}
            />
            {
                errors.rate && submitCount ? <InputError noMargin error={errors.rate} /> : null
            }
        </div>
    )
}

export default RateProduct;