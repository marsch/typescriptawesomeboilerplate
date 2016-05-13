"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var react_redux_1 = require('react-redux');
var React = require('react');
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        var dispatch = this.props.dispatch;
        return (React.createElement("div", {className: "app"}, 'awesome typescript app goes here'));
    };
    return App;
}(React.Component));
var mapStateToProps = function (state) { return ({}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(App);
//# sourceMappingURL=App.js.map