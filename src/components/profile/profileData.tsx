// icons
import { RxHome } from "react-icons/rx";
import { BiShoppingBag,BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa";

interface ProfileSideMenuData {
    title: string,
    link: string,
    icon: React.ReactElement
}

export const profileSideMenuData: ProfileSideMenuData[] = [
    {
        title: "activities",
        link: "/profile",
        icon: <RxHome />
    },
    {
        title: "orders",
        link: "/profile/orders",
        icon: <BiShoppingBag />
    },
    {
        title: "my lists",
        link: "/profile/lists",
        icon: <FiHeart />
    },
    {
        title: "addresses",
        link: "/profile/addresses",
        icon: <FaRegAddressCard />
    },
    {
        title: "personal info",
        link: "/profile/personal-info",
        icon: <BiUser />
    },
]