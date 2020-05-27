const initialState = {
    isLogged: false
}

export const globalReducer = (state = initialState, action) => {

    switch(action.type){
        case 'SET_LOGGED_STATE':
            return {
                ...state,
                isLogged: action.payload
            }
            
        default:
            return state
    }
}