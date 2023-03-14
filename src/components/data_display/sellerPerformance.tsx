import React from 'react'

interface Props {
    performance: "great" | "very good" | "good" | "medium" | "weak" | "very weak"
}

const SellerPerformance = ({ performance }: Props) => {

    // seller performance tailwind color
    const performanceColor = (performance: string) => {
        let tailwindClass = ""

        if (performance === "great") {
            tailwindClass = "text-green-500";
        }
        else if (performance.includes("good")) {
            tailwindClass = "text-lime-500";
        }
        else if (performance === "medium") {
            tailwindClass = "text-slate-400";
        }
        else if (performance.includes("weak")) {
            tailwindClass = "text-orange-500";
        }

        return tailwindClass;
    }

    return (
        <>
            <span className={`${performanceColor(performance)} mr-1 capitalize w-max`}>
                {performance}
            </span>
            <span className='text-gray-600'>
                Performance
            </span>
        </>
    )
}

export default SellerPerformance