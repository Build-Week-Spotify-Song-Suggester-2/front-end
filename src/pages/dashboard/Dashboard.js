import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './styles.dashboard.scss'
import DashboardNav from '../../component/DashboardNav'
import { fetchSongList } from '../../redux/actions'

const inititalFormValue = {
    artist: '',
    title: ''
}

const Dashboard = props => {

    const { fetchSongList } = props
    const [ formValues, setFormValues ]= useState(inititalFormValue)

    useEffect(() => {
        fetchSongList()
     }, [fetchSongList])

    const inputHandler = e => {
        const name = e.target.name
        const value = e.target.value

        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    return (
        <div className='dashboard'>
            <DashboardNav />
            <div className='container'>
                <div className='formContainer'>
                    <form>
                        <h2>Add Songs</h2>
                        <input 
                        name='artist'
                        value={formValues.artist}
                        onChange={inputHandler}
                        type='text'
                        placeholder='Artist Name'>
                        </input>

                        <input 
                        name='title'
                        value={formValues.title}
                        onChange={inputHandler}
                        type='text'
                        placeholder='Song Title'>
                        </input>

                        <button>Add</button>
                    </form>
                </div>

                <div className='songContainer'>
                    {props.songListData.map( song => {
                        return (
                            <div className='dashCard' key={song.id}>
                                <div className='albumArt'>

                                </div>
                                <div className='songInfo'>
                                    <h4>{song.title}</h4>
                                    <h5>{song.artist}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
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