var App = require('./components/App');
var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/AppAPI'); // file that interact with firebase

AppAPI.getContacts();

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
