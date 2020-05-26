

export const setLoggedState = response => {
    return dispatch => (
        dispatch({
            type: 'SET_LOGGED_STATE',
            payload: response
        })
    )
}