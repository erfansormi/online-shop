import React from "react";

// icons
import { BsCart3, BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { RiHomeSmileLine } from "react-icons/ri"
import { BiCategoryAlt } from "react-icons/bi";

// ts
export const userLoggedInIcons = [
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
]

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