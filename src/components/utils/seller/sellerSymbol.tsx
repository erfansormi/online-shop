import React from 'react'
import Image from "next/image";

// icons
import { MdOutlineStore } from 'react-icons/md';

// ts
interface Props {
    shop_name: string,
    size?: "medium" | "large" | "small"
}

const SellerSymbol = ({ shop_name, size }: Props) => {
    const [sizePx, setSizePx] = React.useState(35);

    const handleSize = () => {
        if (!size) {
            return
        }
        else if (size === "large") {
            setSizePx(60)
        }
        else if (size === "small") {
            setSizePx(20)
        }
    }

    React.useEffect(() => {
        handleSize();
    })

    return (
        <>
            {
                shop_name === "online shop" ?
                    <Image
                        src={"/images/shop-logo.png"}
                        alt={"online shop logo"}
                        width={sizePx}
                        height={sizePx}
                    /> :
                    <MdOutlineStore
                        className="text-gray-700"
                        style={{ fontSize: sizePx }}
                    />
            }
        </>
    )
}

export default SellerSymbol;