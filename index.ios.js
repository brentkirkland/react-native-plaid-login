/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  PixelRatio,
  ScrollView
} = React;

var BankLoginSelect = require('./App/Components/bankloginselect.js');

var banks = ['American Express', 'Bank of America', 'Capital One 360',
            'Charles Schwab', 'Chase', 'Citi', 'Fidelity', 'PNC',
            'Silicon Valley Bank', 'US Bank', 'USAA', 'Wells Fargo']

var PlaidLogin = React.createClass({

  render: function() {
    return (
        <BankLoginSelect/>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});

AppRegistry.registerComponent('PlaidLogin', () => PlaidLogin);
