import React, { useState } from 'react'

// formik lib
import { Formik } from 'formik';

//data
import { commentInitialValues, NewCommentSchema, CommentInitialValues, isSuggestBtns } from './newCommentData';

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
import Label from '../../../../data_display/label';
import IsSuggest from './isSuggest';

const NewCommentModal = ({ commentModal, setCommentModal }: Props) => {

    // states
    const [rating, setRating] = useState<null | number>(0);
    const [suggest, setSuggest] = useState("");

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

    const handleClose = () => {
        setCommentModal(false);
        setRating(0);
        setSuggest("");
    };

    return (
        <div>
            <Dialog
                open={commentModal}
                onClose={handleClose}
                fullWidth
            >
                <div className="px-6 pt-5 pb-7 flex flex-col gap-y-4">

                    {/* title */}
                    <div className='flex flex-col gap-y-2 sticky top-0 bg-white z-[50] pt-2'>
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
                                setFieldValue
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className='flex flex-col gap-y-4'>

                                        {/* rate */}
                                        <div className='flex flex-col gap-y-2'>
                                            <Label label={'give rating'} required />
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
                                                errors.rate && rating === 0 && <InputError noMargin error={errors.rate} />
                                            }
                                        </div>

                                        <Divider />

                                        <div className='flex flex-col gap-y-6'>
                                            <h6 className='text-gray-800 font-bold text-base'>
                                                Describe your point of view
                                            </h6>

                                            {/* comment title */}
                                            <div className='flex flex-col gap-y-2'>
                                                <Label label={'comment title'} />
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

                                            {/* is suggest? */}
                                            <div className='flex flex-col gap-y-2'>
                                                <Label label='do you suggest buying this product?' />
                                                <div className='flex item-center gap-2'>
                                                    {
                                                        isSuggestBtns.map((item, index) =>
                                                            <div key={index * 61}>
                                                                <Button
                                                                    className={`p-4 rounded-lg`}
                                                                    variant={suggest === item.value ? "contained" : "outlined"}
                                                                    color={item.color}
                                                                    onClick={() => {
                                                                        if (suggest === item.value) {
                                                                            setFieldValue("isSuggest", undefined)
                                                                            setSuggest("")
                                                                        }
                                                                        else {
                                                                            setFieldValue("isSuggest", item.value)
                                                                            setSuggest(item.value);
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

                                            {/* comment text */}
                                            <div className='flex flex-col gap-y-2'>
                                                <Label label='comment text' required />
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
                            )}
                        </Formik>
                    </div>
                </div>
            </Dialog >
        </div >
    )
}

export default NewCommentModal;