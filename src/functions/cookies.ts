import { deleteCookie, setCookie } from "cookies-next";


export const handleSetCookie = (key: string, token: string) => {
    setCookie(key, token, {
        maxAge: 30 * 24 * 60 * 60,
    });
}

export const clearCookie = (key: string) => {
    deleteCookie(key)
}