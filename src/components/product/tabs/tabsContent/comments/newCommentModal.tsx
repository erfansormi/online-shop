import React, { useState } from 'react'

// formik lib
import { Formik } from 'formik';

//data
import { commentInitialValues, NewCommentSchema, CommentInitialValues, isSuggestBtns, commentInputs } from './newCommentData';

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

// icons
import { AiOutlineClose } from 'react-icons/ai';

// axios
import { axiosInstance } from '../../../../../functions/axiosInstance';

// use context
import { useGeneralContext } from '../../../../../context/generalContext';

// components
import InputError from '../../../../form/input/inputError';
import Label from '../../../../data_display/label';
import IsSuggest from './isSuggest';

const NewCommentModal = ({ commentModal, setCommentModal }: Props) => {
    const { general, setGeneral } = useGeneralContext();

    // states
    const [rating, setRating] = useState<null | number>(0);
    const [suggest, setSuggest] = useState("");

    // contexts
    const { productInfo: { product } } = useProductContext();
    const { user } = useUserContext();

    // form submit
    const handleSubmit = async (values: CommentInitialValues) => {
        if (user === null) {
            toastify("please login into your account!", "light", "warning")
            handleClose();
        }
        else {
            handleClose();
            setGeneral({
                ...general,
                loading: true
            });
            await axiosInstance.post(`/api/v1/products/${product._id}/comments`, {
                values
            })
                .then(res => {
                    toastify(res.data.message, "light", "success")
                })
                .catch(err => {
                    toastify(err.response.data.message, "light", "error")
                })
                .finally(() => {
                    setGeneral({
                        ...general,
                        loading: false
                    });
                })
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
                <div className="px-6 pt-3 pb-7 flex flex-col gap-y-4">

                    {/* title */}
                    <div className='flex flex-col sticky justify-between top-0 bg-white z-[50] pt-4 gap-y-2'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-y-2'>
                                <h5 className="text-gray-800 text-lg">
                                    your point of view
                                </h5>
                                <span className='text-gray-500 text-sm lowercase mb-2'>
                                    about {product.title}
                                </span>
                            </div>
                            <span onClick={handleClose} className="cursor-pointer text-lg">
                                <AiOutlineClose />
                            </span>
                        </div>
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
                                setFieldValue,
                                submitCount
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className='flex flex-col gap-y-4'>

                                        {/* rate */}
                                        <div className='flex flex-col gap-y-2'>
                                            <Label label={'give rating'} required />
                                            <Rating
                                                style={{ marginLeft: -5 }}
                                                size="large"
                                                name='rate'
                                                onChange={(e, index) => {
                                                    setRating(index);
                                                    handleChange(e);
                                                }}
                                                onBlur={handleBlur}
                                                value={rating}
                                            />
                                            {
                                                errors.rate && rating === 0 && submitCount ? <InputError noMargin error={errors.rate} /> : null
                                            }
                                        </div>

                                        <Divider />

                                        <div className='flex flex-col gap-y-6'>
                                            <h6 className='text-gray-800 font-bold text-base'>
                                                Describe your point of view
                                            </h6>

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
                            )}
                        </Formik>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default NewCommentModal;