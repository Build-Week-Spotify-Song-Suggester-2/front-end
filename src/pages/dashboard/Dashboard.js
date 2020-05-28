import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './styles.dashboard.scss'
import DashboardNav from '../../component/DashboardNav'
import { fetchSongList, addSong, deleteSong, editSong } from '../../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faEdit } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

const inititalFormValue = {
    artist: '',
    title: ''
}


const Dashboard = props => {

    const { fetchSongList, addSong, deleteSong, editSong } = props
    const [ formValues, setFormValues ]= useState(inititalFormValue)
    const [ editFormValues, setEditFormValues ] = useState(inititalFormValue)
    const [ id, setId ] = useState(null)

    useEffect(() => {
        fetchSongList()
     }, [fetchSongList])

    useEffect(() => {
        if (id !== null){
            axiosWithAuth()
            .get(`api/songs/${id}`)
            .then( res => {
            console.log(res)
            const initialEditFormValues = {
                artist: res.data.artist,
                title: res.data.title
            }
            setEditFormValues(initialEditFormValues)
        })
        }
        
    }, [id])


    const inputHandler = e => {
        const name = e.target.name
        const value = e.target.value

        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    const editInputHandler = e => {
        const name = e.target.name
        const value = e.target.value

        setEditFormValues({
            ...editFormValues,
            [name]: value
        })
    }
    const modal = document.querySelector('.modal')

    return (
        <div className='dashboard'>
            <DashboardNav />

            <div className='modal hide'>
                    <form>
                        <h2>Edit Song</h2>
                        <div onClick={() => modal.classList.add('hide')} className='closeModal'>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>

                        <label>Title</label>
                        <input 
                        name='title'
                        value={editFormValues.title}
                        onChange={editInputHandler}
                        type='text'
                        placeholder='Song Title'>
                        </input>
                        
                        <label>Artist</label>
                        <input 
                        name='artist'
                        value={editFormValues.artist}
                        onChange={editInputHandler}
                        type='text'
                        placeholder='Artist Name'>
                        </input>

                        <button onClick={e => {
                            e.preventDefault()
                            editSong(id, editFormValues)
                            // setEditFormValues(editFormValues)
                            modal.classList.add('hide')
                        }}>Save</button>
                    </form>
                </div>

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

                        <button onClick={e => {
                            e.preventDefault()
                            addSong(formValues)
                            setFormValues(inititalFormValue)
                        }}>Add</button>
                    </form>
                </div>

                <div className='songContainer'>
                    { props.isFetching ? 'yes' : props.songListData.map( song => {
                        return (
                            <div className='dashCard' key={song.id}>
                                <div className='albumArt'>
                                    <img src={song.album_art} alt={song.name}/>
                                </div>
                                <div className='songInfo'>
                                    <h4>{song.title}</h4>
                                    <h5>{song.artist}</h5>
                                </div>
                                <div className='editIconContainer' onClick={ e => {
                                    e.preventDefault()
                                    setId(song.id)
                                    modal.classList.remove('hide')
                                }}><FontAwesomeIcon icon={faEdit} /></div>
                                <div className='iconContainer' onClick={ e => {
                                    e.preventDefault()
                                    deleteSong(song.id)
                                }}><FontAwesomeIcon icon={faTimesCircle} /></div>
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
        songListData: state.songListData,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, {fetchSongList, addSong, deleteSong, editSong})(Dashboard)