import { toast, TypeOptions } from 'react-toastify';

export const toastify = (text: string, type: TypeOptions) => {
    toast(text, {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        type: type
    })
}