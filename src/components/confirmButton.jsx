import React from 'react'

export const confirmButton = (props, children) => {
    return (
        <button {...props}>{...children}</button>
    )
}
