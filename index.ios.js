/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Brent Kirkland
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
} = React;

var LoginNavigation = require('./App/Components/loginnavigation.js');

var PlaidLogin = React.createClass({

  render: function() {
    return (
        <LoginNavigation/>
    );
  },
});

AppRegistry.registerComponent('PlaidLogin', () => PlaidLogin);
