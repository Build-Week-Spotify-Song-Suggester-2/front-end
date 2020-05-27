import React, { useEffect } from 'react'
import { fetchSongList } from '../../redux/actions'
import { connect } from 'react-redux'
import './styles.dashboard.scss'

const Dashboard = props => {
    const { fetchSongList, songListData } = props

    
    useEffect(() => {
       fetchSongList()
    }, [fetchSongList])

    return (
        <div className='dashboard'>
            <h1>Dashboard</h1>
            <div className='listContainer'>
                {songListData.map( e => {
                    return (
                        <div className='card' key={e.id}>
                            <div className='albumPlaceholder'></div>
                            <h3>{e.title}</h3>
                            <h4>{e.artist}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {

    return {
        songListData: state.songListData
    }
}

export default connect(mapStateToProps, {fetchSongList})(Dashboard)