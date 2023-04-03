import React from 'react'

// mui
import { Button } from '@mui/material'

interface Props {
    text: string,
    className?: string,
    variant?: "text" | "contained" | "outlined" | undefined,
    color?: "primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning" | undefined
}

const SubmitButton = ({ text, className, color, variant }: Props) => {
    return (
        <div className="mb-3 w-full">
            <Button
                type='submit'
                className={`${className ? className : ""} w-full rounded-md`}
                variant={variant ? variant : "contained"}
                color={color ? color : "primary"}
            >
                {text}
            </Button>
        </div>
    )
}

export default SubmitButton;