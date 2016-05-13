"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var redux_1 = require('redux');
var react_redux_1 = require('react-redux');
var redux_actions_1 = require('redux-actions');
var App_1 = require('./components/App');
var helloAction = redux_actions_1.createAction('HELLOWORLD');
var initialState = {};
var rootReducer = redux_1.combineReducers({
    default: redux_actions_1.handleActions((_a = {},
        _a['HELLOWORLD'] = function (state, action) {
            if (state === void 0) { state = {}; }
            return state;
        },
        _a
    ), initialState)
});
var store = redux_1.createStore(rootReducer, initialState);
ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store}, 
    React.createElement(App_1.default, null)
), document.getElementById('app'));
var _a;
//# sourceMappingURL=main.js.map