// icons
import { Avatar } from "@mui/material"
import { IoMdSettings } from "react-icons/io"
import { BsBagFill } from 'react-icons/bs';
import { AiOutlineHeart } from "react-icons/ai";

export const profileMenuItem = [
    {
        icon: <Avatar style={{ width: 25, height: 25, margin: 0 }} />,
        title: "Profile",
        link: "/profile"
    },
    {
        icon: <BsBagFill />,
        title: "Orders",
        link: "/profile/orders"
    },
    {
        icon: <AiOutlineHeart />,
        title:"Lists",
        link:"/profile/lists"
    },
    {
        icon: <IoMdSettings />,
        title: "Settings",
        link: "/profile/settings"
    },
]