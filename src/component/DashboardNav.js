import React from 'react'
import StyledLink from '../component/StyledLink'
import './styles.dashboardNav.scss'

const DashboardNav = props => {

    return (
        <div className='dashNavContainer'>
            <StyledLink to='/dashboard'>Profile</StyledLink>
            <StyledLink to='/dashboard/collection'>Collection</StyledLink>
        </div>
    )
}

export default DashboardNav