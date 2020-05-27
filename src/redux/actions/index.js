import { axiosWithAuth } from '../../utils/axiosWithAuth'

export const setLoggedState = response => {
    return dispatch => (
        dispatch({
            type: 'SET_LOGGED_STATE',
            payload: response
        })
    )
}
export const fetchSongList = () => {
    return dispatch => (
        axiosWithAuth()
        .get('api/songs')
        .then( res => {
            dispatch({
                type: 'FETCH_SONG_LIST',
                payload: res.data
            })
        }) 
    )
}
export const addSong = newSong => {
    return dispatch => (
        axiosWithAuth()
        .post('api/songs', newSong)
        .then( res => {
            dispatch({
                type: 'ADD_SONG',
                payload: res.data
            })
        })
    )
}
export const deleteSong = songId => {
    return dispatch => (
        axiosWithAuth()
        .delete(`api/songs/${songId}`)
        .then( res => {
            axiosWithAuth()
            .get('api/songs')
            .then( res =>
                dispatch({
                    type: 'DELETE_SONG',
                    payload: res.data
                }))
        })
    )
}