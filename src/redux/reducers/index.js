const initialState = {
    isLogged: false,
    songListData: []
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
                songListData: action.payload
            }
            
        default:
            return state
    }
}