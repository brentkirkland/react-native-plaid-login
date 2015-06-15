'use strict';

var React = require('react-native');

var {
	AppRegistry,
	NavigatorIOS,
	StyleSheet,
} = React;

var BankLoginSelect = require('./bankloginselect.js');

var LoginNavigation = React.createClass({

	render: function() {
		
		return (
			<NavigatorIOS
			style={styles.nav}
			navigationBarHidden={true}
			initialRoute={{
				component: BankLoginSelect,
				title: 'react-native-plaid-login'
			}}
			/>
		)
	}
});

var styles = StyleSheet.create({
  nav: {
    flex: 1,
  }
 });

module.exports = LoginNavigation;