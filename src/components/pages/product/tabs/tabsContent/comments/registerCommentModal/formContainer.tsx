import React from 'react'

// data
import { commentInputs } from './registerCommentData';

// types
import { FormikProps } from 'formik';
import type { CommentInitialValues } from './registerCommentData';

interface Props extends FormikProps<CommentInitialValues> {
    setInitialValues: React.Dispatch<React.SetStateAction<CommentInitialValues>>
}

// components
import ProductRate from './productRate';
import ProductSuggest from './productSuggest';
import { Button, Checkbox, Divider } from '@mui/material';
import Label from '../../../../../../data_display/label';
import InputError from '../../../../../../data_entry/input/inputError';

const ModalFormContainer = (props: Props) => {
    const { values, errors, initialValues, handleChange, handleBlur, setFieldValue, touched, handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-y-4'>

                {/* rate */}
                <ProductRate {...props} />

                <Divider />

                <div className='flex flex-col gap-y-6'>
                    <h6 className='text-gray-800 font-bold text-base'>
                        Describe your point of view
                    </h6>

                    {/* is suggest? */}
                    <ProductSuggest {...props} />

                    {/* comment title and text  */}
                    {
                        commentInputs.map((item, index) =>
                            <div className='flex flex-col gap-y-2' key={index * 65}>
                                <Label label={item.label} required={item.required} />
                                <item.inputComponent
                                    name={item.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values[item.name]}
                                />
                                {
                                    errors[item.name] && touched[item.name] && <InputError noMargin error={errors[item.name]} />
                                }
                            </div>
                        )
                    }

                    {/* is unknown comment? */}
                    <div className='flex items-center'>
                        <Checkbox
                            checked={values.unknown}
                            name="unknown"
                            onChange={handleChange}
                            id="anonymously-checkbox-comment"
                            color='info'
                        />
                        <Label label='post comment anonymously' htmlFor='anonymously-checkbox-comment' />
                    </div>

                </div>

                {/* submit form */}
                <div className='flex justify-center w-full'>
                    <Button
                        type="submit"
                        variant={"contained"}
                        className="w-full md:w-2/3"
                    >
                        register comment
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default ModalFormContainer;