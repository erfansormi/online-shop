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
        link: "/profile/lists",
        title: "My Lists"
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
                icon:
                    <>
                        <BsCart3 />
                        {
                            user.cart.products_counts ?
                                <span className='absolute bottom-1.5 -right-1 text-white bg-rose-500 rounded w-3.5 h-3.5 text-[0.65rem] flex items-center justify-center'>
                                    {user.cart.products_counts}
                                </span> :
                                null
                        }
                    </>,
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