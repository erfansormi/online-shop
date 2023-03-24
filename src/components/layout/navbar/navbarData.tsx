import React from "react";

// icons
import { BsCart3, BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { RiHomeSmileLine } from "react-icons/ri"
import { BiCategoryAlt } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { User } from "../../../types/user/userTypes";

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

export const smNavData = (user: null | User) => {
    let data = [
        {
            icon: <RiHomeSmileLine />,
            link: "/",
            title: "home"
        },
        {
            icon: <BiCategoryAlt />,
            link: "/products",
            title: "products"
        }
    ]

    if (user === null) {
        data.push({
            icon: <BsBoxArrowInRight />,
            link: "/auth/login",
            title: "Login"
        })
    }
    else {
        data.push(
            {
                icon: <BsCart3 />,
                link: "/cart",
                title: "Cart"
            },
            {
                icon: <FiUser />,
                link: "/profile",
                title: "profile"
            }
        )
    }

    return data;
} 