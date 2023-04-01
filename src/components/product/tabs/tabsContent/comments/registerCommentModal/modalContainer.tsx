import React, { useEffect, useState } from 'react'

// formik lib
import { Formik } from 'formik';

//data
import { commentInitialValues, RegisterCommentSchema, CommentInitialValues } from './registerCommentData';

// mui
import { Divider } from '@mui/material';

// react toastify
import { toastify } from '../../../../../utils/toastify/toastifyFunc';

// ts
interface Props {
    commentModal: boolean,
    setCommentModal: React.Dispatch<React.SetStateAction<boolean>>,
}

// contexts
import { useProductContext } from '../../../../productContainer';
import { useUserContext } from '../../../../../../context/userContext';
import { useGeneralContext } from '../../../../../../context/generalContext';

// icons
import { AiOutlineClose } from 'react-icons/ai';

// axios
import { axiosInstance } from '../../../../../../functions/axiosInstance';

// components
import ModalFormContainer from './formContainer';
import CustomizedModal from '../../../../../utils/modal/customizedModal';

const ModalContainer = ({ commentModal, setCommentModal }: Props) => {
    // contexts
    const { general, setGeneral } = useGeneralContext();
    const { comments } = useProductContext();
    const { productInfo: { product } } = useProductContext();
    const { user } = useUserContext();

    // modal initial value state
    const [initialValues, setInitialValues] = useState<CommentInitialValues>(commentInitialValues);

    // load last comment if there is
    const handleLastComment = () => {
        const searchComment = comments.find(item => item.user.userId._id === user?._id);

        if (searchComment) {
            setInitialValues({
                commentText: searchComment.comment_text,
                rate: searchComment.rate,
                title: searchComment.title ? searchComment.title : undefined,
                unknown: searchComment.user.unknown,
                isSuggest: searchComment.is_suggest ? searchComment.is_suggest : undefined,
            })
        }
    }

    useEffect(() => {
        handleLastComment();
    }, [user, comments])

    // handle close modal
    const handleClose = () => {
        setCommentModal(false);
        setInitialValues({
            ...commentInitialValues,
        });
        handleLastComment()
    };

    // form submit
    const handleSubmit = async (values: CommentInitialValues) => {
        console.log(values)
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
                comment_text: values.commentText,
                is_suggest: values.isSuggest ? values.isSuggest : undefined,
                title: values.title ? values.title : undefined,
                rate: values.rate,
                unknown: values.unknown,
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

    return (
        <div>
            <CustomizedModal
                open={commentModal}
                handleClose={handleClose}
                title={`your point of view`}
                description={`about ${product.title}`}
                maxWidth="sm"
                className='px-6'
            >
                <div className="pb-7 flex flex-col gap-y-4">
                    {/* form body */}
                    <div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={RegisterCommentSchema}
                            onSubmit={handleSubmit}
                        >
                            {(props) => (
                                <ModalFormContainer setInitialValues={setInitialValues} {...props} />
                            )}
                        </Formik>
                    </div>
                </div>
            </CustomizedModal>
        </div>
    )
}

export default ModalContainer;