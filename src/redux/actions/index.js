import { axiosWithAuth, axiosWithAuthSpotify } from '../../utils/axiosWithAuth'

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
export const editSong = (songId, newSong) => {
    return dispatch => (
        axiosWithAuth()
        .put(`api/songs/${songId}`, newSong)
        .then( res => {
            axiosWithAuth()
            .get('api/songs')
            .then( res =>
                dispatch({
                    type: 'EDIT_SONG',
                    payload: res.data
                }))
        })
    )
}
export const fetchSearchSpotify = encodeUrl => {
    return dispatch => (
        axiosWithAuthSpotify()
        .get(encodeUrl)
        .then( res => {
            dispatch({
                type: 'SEARCH_ON_SPOTIFY',
                payload: res.data
            })
        })
    )
}