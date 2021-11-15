import React from 'react'

export const ConfirmButton = ({children, ...props}) => {
    return (
        <button {...props} className="confirmButton">{children}</button>
    )
}
