import axios from 'axios'

export const START_FETCH = 'START_FETCH'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const fetchGoT = () => dispatch => {
    dispatch({ type: START_FETCH });
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/characters'
      )
      .then(res => {
          console.log('fetch got data', res
          )
          dispatch({ type: FETCH_SUCCESS, payload: res.data })
      })
      .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
  };

// const thunk = next => action => store => {
//     if (typeof action === 'object') {
//         next(action)
//     } else if (typeof action === 'function') {
//         action(store.dispatch)
//     }
// }