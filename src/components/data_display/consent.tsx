import React from 'react'

interface Props {
    number: number
}

const Consent = ({ number }: Props) => {
    const hanldeClass = () => {
        let className = "";

        if (number < 30) {
            className = "text-red-600"
        }
        else if (number < 60) {
            className = "text-orange-600"
        }
        else if (number < 75) {
            className = "text-lime-400"
        }
        else if (number < 90) {
            className = "text-lime-500"
        }
        else {
            className = "text-green-500"
        }

        return className;
    }

    return (
        <span className={`${hanldeClass()}`}>
            {number}%
        </span>
    )
}

export default Consent