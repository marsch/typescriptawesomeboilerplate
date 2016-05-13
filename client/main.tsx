/// <reference path='../typings/main.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IStore, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createAction, handleActions } from 'redux-actions';

import App from './components/App';


let helloAction = createAction('HELLOWORLD');


const initialState = {};
let rootReducer = combineReducers({
    default: handleActions({
      ['HELLOWORLD'] :function(state = {}, action) {
        return state;
      }
    } , initialState)
})
const store: IStore<any> = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
