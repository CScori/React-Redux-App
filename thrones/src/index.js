import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

