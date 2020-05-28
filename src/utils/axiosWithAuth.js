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

export const axiosWithAuthSpotify = () => {
    
    const token = 'BQDGt4NwfNksnfXSfkl1AHVGGzhv-pdJhE2Ia52ZYW-Z9powumPOpD9QK1dl3kWICT1MuFry7p4TvPkXaGog_yOaTF6_iA2FPWHfj9b7chaYKnYf4tXIAtA_Tnhe5sZC2ujc5i4xOhZyjHrpBMkKGss'
    return axios.create({
        headers: {
            Authorization: `Bearer ${token}`,
        },
        baseURL: 'https://api.spotify.com/v1/'
    })
}