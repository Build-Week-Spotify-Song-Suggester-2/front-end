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