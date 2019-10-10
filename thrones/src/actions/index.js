const fetchGOT = () => {
    console.log('action fetch', action)
    return (dispatch) => {
        dispatch({type: 'START_FETCH'})

        axios
        .get('')
        .then(res => {
            console.log('object', res.data)
            dispatch({ type: 'FETCH_SUCCESS', payload: res.data})
        })
        .catch(err => {dispatch({ type: FETC_FAILURE, payload: err.response})
        })
    }
}

const thunk = next => action => store => {
    if (typeof action === 'object') {
        next(action)
    } else if (typeof action === 'function') {
        action(store.dispatch)
    }
}