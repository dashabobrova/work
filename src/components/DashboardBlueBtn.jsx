import React from 'react'

export const DashboardBlueBtn = ({children, ...props}) => {
    return (
        <button {...props} className="dashboardBlueBtn">{children}</button>
    )
}
