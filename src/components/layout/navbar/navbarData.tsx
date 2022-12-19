import React from "react";

// firebase
import { User } from "firebase/auth";

// icons
import { BsCart3, BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

// ts
interface Data {
    icon: React.ReactElement,
    link: string,
    title: string
}

export const navbarData = (user: null | User) => {
    const data: Data[] = user !== null ?
        [
            {
                icon: <AiOutlineHeart />,
                link: "/account/favorite",
                title: "Favorite list"
            },
            {
                icon: <BsCart3 />,
                link: "/cart",
                title: "Cart"
            }
        ] :
        [
            {
                icon: <BsCart3 />,
                link: "/cart",
                title: "Cart"
            },
            {
                icon: <BsBoxArrowInRight />,
                link: "/auth/signup",
                title: "Signup / Login"
            },
        ]

    return data;
}