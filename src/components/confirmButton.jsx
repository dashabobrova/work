import React from 'react'

export const confirmButton = ({children, ...props}) => {
    return (
        <button {...props}>{children}</button>
    )
}
