import { toast, Theme, TypeOptions } from 'react-toastify';

export const toastify = (text: string, theme: Theme, type: TypeOptions) => {
    toast(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
        type: type
    })
}