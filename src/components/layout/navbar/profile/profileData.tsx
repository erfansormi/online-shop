// icons
import { Avatar } from "@mui/material"
import { IoMdSettings } from "react-icons/io"
import { BsBagFill } from 'react-icons/bs';

export const profileMenuItem = [
    {
        icon: <Avatar style={{ width: 25, height: 25, margin: 0 }} />,
        title: "Profile",
        link: "/account/profile"
    },
    {
        icon: <Avatar style={{ width: 25, height: 25, margin: 0 }} />,
        title: "Account",
        link: "/account"
    },
    {
        icon: <BsBagFill />,
        title: "Orders",
        link: "/account/orders"
    },
    {
        icon: <IoMdSettings />,
        title: "Settings",
        link: "/account/settings"
    },
]