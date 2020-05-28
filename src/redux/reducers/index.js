const initialState = {
    isLogged: false,
    isFetching: true,
    songListData: [],
    // FROM SPOTIFY 
    song_info: []
    //
}

export const globalReducer = (state = initialState, action) => {

    switch(action.type){
        case 'SET_LOGGED_STATE':
            return {
                ...state,
                isLogged: action.payload
            }
        case 'FETCH_SONG_LIST':
            return {
                ...state,
                songListData: action.payload,
                isFetching: false
            }
        case 'ADD_SONG':
            return {
                ...state,
                songListData: [...state.songListData, action.payload]
            }
        case 'DELETE_SONG':
            return {
                ...state,
                songListData: action.payload
            }
        case 'EDIT_SONG':
            return {
                ...state,
                songListData: action.payload
            }
        case 'SEARCH_ON_SPOTIFY':
            return {
                ...state,
                song_info: action.payload
            }
            
        default:
            return state
    }
}