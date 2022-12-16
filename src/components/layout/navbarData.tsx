import React from "react";
import { FiUser } from "react-icons/fi";
import { BsCart3, BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { User } from "firebase/auth";

// ts
interface Data {
    icon: React.ReactElement,
    link: string
}

export const navbarData = (isLoggedIn: boolean) => {
    const data: Data[] = isLoggedIn ?
        [
            {
                icon: <AiOutlineHeart />,
                link: "/favorite"
            },
            {
                icon: <BsCart3 />,
                link: "/cart"
            },
            {
                icon: <FiUser />,
                link: "/profile"
            }
        ] :
        [
            {
                icon: <BsCart3 />,
                link: "/cart"
            },
            {
                icon: <BsBoxArrowInRight />,
                link: "/signup"
            },
        ]

    return data;
}