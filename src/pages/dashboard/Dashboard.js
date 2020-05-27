import React, { useEffect } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

const Dashboard = props => {
    
    useEffect(() => {
        axiosWithAuth()
            .get('api/songs')
            .then( res => {
                console.log(res)
            })
    })

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard