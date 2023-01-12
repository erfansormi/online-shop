interface Lists {
    text: string,
    link: string
}

interface Footer {
    title: string,
    lists: Lists[]
}
export const footerData: Footer[] = [
    {
        title: "Get to Know Us",
        lists: [
            {
                text: "Careers",
                link: "/"
            },
            {
                text: "Blog",
                link: "/"
            },
            {
                text: "About us",
                link: "/"
            },
            {
                text: "sale in online shop",
                link: "/"
            },
            {
                text: "Investor Relations",
                link: "/"
            },
        ]
    },
    {
        title: "customer services",
        lists: [
            {
                link: "/",
                text: "Returns & Replacements"
            },
            {
                link: "/",
                text: "Shipping Rates & Policies"
            },
            {
                link: "/",
                text: "Answers to frequently asked questions"
            },
            {
                link: "/",
                text: "privacy and policy"
            },
            {
                link: "/",
                text: "report a bug"
            },
        ]
    },
    {
        title: "buying guide from online shop",
        lists: [
            {
                text: "How to place an order",
                link: "/"
            },
            {
                text: "Order sending procedure",
                link: "/"
            },
            {
                text: "Payment methods",
                link: "/"
            },
        ]
    },
] 

// icons
import { SiAparat } from "react-icons/si"
import { BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';

export const footerIcons = [
    {
        icon: <SiAparat />
    },
    {
        icon: <BsLinkedin />
    },
    {
        icon: <BsTwitter />
    },
    {
        icon: <BsInstagram />
    }
]