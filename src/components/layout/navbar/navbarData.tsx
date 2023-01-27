import React from "react";

// firebase
import { User } from "firebase/auth";

// icons
import { BsCart3, BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { RiHomeSmileLine } from "react-icons/ri"
import { BiCategoryAlt } from "react-icons/bi";

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
            // {
            //     icon: <BsBoxArrowInRight />,
            //     link: "/auth/login",
            //     title: "Login"
            // },
            // {
            //     icon: <TbUserPlus />,
            //     link: "/auth/signup",
            //     title: "Signup"
            // },
        ]

    return data;
}

export const smNavData = [
    {
        icon: <RiHomeSmileLine />,
        link: "/",
        title: "home"
    },
    {
        icon: <BiCategoryAlt />,
        link: "/products",
        title: "products"
    },
    {
        icon: <BsCart3 />,
        link: "/cart",
        title: "Cart"
    },
    {
        icon: <BsBoxArrowInRight />,
        link: "/auth/login",
        title: "Login"
    },
]