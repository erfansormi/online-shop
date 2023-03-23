import React, { useState } from 'react'

// formik lib
import { Formik } from 'formik';

//data
import { commentInitialValues, NewCommentSchema, CommentInitialValues } from './newCommentData';

// mui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Checkbox, Divider, Rating } from '@mui/material';

// react toastify
import { toastify } from '../../../../utils/toastify/toastifyFunc';

// ts
interface Props {
    commentModal: boolean,
    setCommentModal: React.Dispatch<React.SetStateAction<boolean>>,
}

// contexts
import { useProductContext } from '../../../productContainer';
import { useUserContext } from '../../../../../context/userContext';

// components
import Input from '../../../../form/input/input';
import InputError from '../../../../form/input/inputError';
import TextArea from '../../../../form/input/textArea';

const NewCommentModal = ({ commentModal, setCommentModal }: Props) => {
    const handleClose = () => {
        setCommentModal(false);
    };

    // rating value
    const [rating, setRating] = useState<null | number>(0);

    // contexts
    const { productInfo: { product } } = useProductContext();
    const { user } = useUserContext();

    // form submit
    const handleSubmit = async (values: CommentInitialValues) => {
        console.log(values);
        if (user === null) {
            toastify("please login into your account!", "light", "warning")
        }
    }

    return (
        <div>
            <Dialog
                open={commentModal}
                onClose={handleClose}
                fullWidth
            >
                <div className="px-6 py-4 flex flex-col gap-y-4">

                    {/* title */}
                    <div className='flex flex-col gap-y-2 sticky top-0 bg-white z-[50] pt-3'>
                        <h5 className="text-gray-800 text-lg">
                            your point of view
                        </h5>
                        <span className='text-gray-500 text-sm lowercase mb-2'>
                            about {product.title}
                        </span>
                        <Divider />
                    </div>

                    {/* form */}
                    <div>
                        <Formik
                            initialValues={commentInitialValues}
                            validationSchema={NewCommentSchema}
                            onSubmit={handleSubmit}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className='flex flex-col gap-y-4'>

                                        {/* rate */}
                                        <div className='flex flex-col gap-y-2'>
                                            <h6 className='text-gray-800 capitalize text-base'>
                                                give rating
                                            </h6>
                                            <Rating
                                                name='rate'
                                                onChange={(e, index) => {
                                                    setRating(index);
                                                    handleChange(e);
                                                }}
                                                onBlur={handleBlur}
                                                value={rating}
                                            />
                                            {
                                                errors.rate && touched.rate && <InputError noMargin error={errors.rate} />
                                            }
                                        </div>

                                        <Divider />

                                        <div className='flex flex-col gap-y-8'>
                                            <h6 className='text-gray-800 font-bold text-base'>
                                                Describe your point of view
                                            </h6>

                                            {/* title */}
                                            <div className='flex flex-col gap-y-2'>
                                                <h6 className='text-gray-800 capitalize text-base'>
                                                    comment title
                                                </h6>
                                                <Input
                                                    name='title'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.title}
                                                />
                                                {
                                                    errors.title && touched.title && <InputError noMargin error={errors.title} />
                                                }
                                            </div>

                                            {/* comment text */}
                                            <div className='flex flex-col gap-y-2'>
                                                <h6 className='text-gray-800 capitalize text-base'>
                                                    comment text
                                                </h6>
                                                <TextArea
                                                    name='commentText'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.commentText}
                                                />
                                                {
                                                    errors.commentText && touched.commentText && <InputError noMargin error={errors.commentText} />
                                                }
                                            </div>

                                            {/* is unknown comment? */}
                                            <div className='flex items-center'>
                                                <Checkbox
                                                    checked={values.unknown}
                                                    name="unknown"
                                                    onChange={handleChange}
                                                />
                                                <h6 className='text-gray-700 text-sm capitalize'>
                                                    post comment anonymously
                                                </h6>
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
                            )}
                        </Formik>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default NewCommentModal;