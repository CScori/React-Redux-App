import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'

import App from './App';

const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(<App />, document.getElementById('root'));

