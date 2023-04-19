import React from 'react'

// icons
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'

type IsSuggest = "yes" | "no" | "unsure" | undefined;

const IsSuggest = ({ suggest, isWhite }: { suggest: IsSuggest, isWhite?: boolean }) => {
    if (suggest === "yes") {
        return (
            <div className={`flex items-center gap-x-2 leading-4 ${isWhite ? "text-white" : "text-green-500"}`}>
                <span className="flex">
                    <AiOutlineLike />
                </span>
                <span className="flex">
                    i suggest
                </span>
            </div>
        )
    }

    else if (suggest === "no") {
        return (
            <div className={`flex items-center gap-x-2 leading-4 ${isWhite ? "text-white" : "text-red-500"}`}>
                <span className="flex">
                    <AiOutlineDislike />
                </span>
                <span className="flex">
                    i do not suggest
                </span>
            </div>
        )
    }

    else if (suggest === "unsure") {
        return (
            <div className={`flex items-center gap-x-2 leading-4 ${isWhite ? "text-white" : "text-gray-500"}`}>
                <span className={`w-1 h-1 rounded-full ${isWhite ? "bg-white" : "bg-gray-500"}`}>
                </span>
                <span className="flex">
                    not sure
                </span>
            </div>
        )
    }

    else return null;
}

export default IsSuggest