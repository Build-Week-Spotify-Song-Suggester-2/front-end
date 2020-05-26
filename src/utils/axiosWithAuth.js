import axios from 'axios'

export const axiosWithAuth = () => {
    
    const token = localStorage.getItem('bwSpotifyToken')
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'https://spotify-song-suggester-bw.herokuapp.com/'
    })
}