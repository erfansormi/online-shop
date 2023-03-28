// icons
import { Avatar } from "@mui/material"
import { IoMdSettings } from "react-icons/io"
import { BsBagFill } from 'react-icons/bs';
import { AiOutlineHeart } from "react-icons/ai";

// types
import { User } from "../../../../types/user/userTypes";

export const profileMenuItem = (user: User | null) => {
    return [
        {
            icon: <Avatar style={{ width: 25, height: 25, margin: 0 }} />,
            title: `${user === null ? "Profile" : `${user.first_name} ${user.last_name}`}`,
            link: "/profile"
        },
        {
            icon: <BsBagFill />,
            title: "Orders",
            link: "/profile/orders"
        },
        {
            icon: <AiOutlineHeart />,
            title: "Lists",
            link: "/profile/lists"
        },
        {
            icon: <IoMdSettings />,
            title: "Settings",
            link: "/profile/settings"
        },
    ]
}