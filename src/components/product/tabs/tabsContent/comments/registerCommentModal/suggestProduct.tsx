import React, { useState } from 'react';

// mui
import { Button } from '@mui/material';

// data
import { isSuggestBtns } from './registerCommentData';

// components
import Label from '../../../../../data_display/label';
import IsSuggest from '../isSuggest';

// ts
import type { CommentInitialValues } from './registerCommentData';
import { FormikProps } from 'formik';

const SuggestProduct = ({ initialValues, setFieldValue }: FormikProps<CommentInitialValues>) => {
    const [suggest, setSuggest] = useState<"yes" | "no" | "unsure" | undefined>(initialValues.isSuggest);

    return (
        <div className='flex flex-col gap-y-2'>
            <Label label='do you suggest buying this product?' />
            <div className='flex sm:flex-row flex-col item-center gap-2'>
                {
                    isSuggestBtns.map((item, index) =>
                        <div key={index * 61}>
                            <Button
                                className={`p-4 rounded-lg`}
                                variant={suggest === item.value ? "contained" : "outlined"}
                                color={item.color}
                                onClick={() => {
                                    if (suggest === item.value) {
                                        setSuggest(undefined);
                                        setFieldValue("isSuggest", undefined);
                                    }
                                    else {
                                        setSuggest(item.value);
                                        setFieldValue("isSuggest", item.value);
                                    }
                                }}
                            >
                                <IsSuggest suggest={item.value} isWhite={suggest === item.value ? true : false} />
                            </Button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SuggestProduct;