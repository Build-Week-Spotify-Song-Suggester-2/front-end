import React, { useState } from 'react'
import { connect } from 'react-redux'
import './styles.dashboard.scss'
import DashboardNav from '../../component/DashboardNav'

const inititalFormValue = {
    artist: '',
    title: ''
}

const Dashboard = props => {

    const [ formValues, setFormValues ]= useState(inititalFormValue)

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
                            <div key={song.id}>
                                <div className='albumArt'>

                                </div>
                                <h4>{song.title}</h4>
                                <h5>{song.artist}</h5>
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

export default connect(mapStateToProps, {})(Dashboard)