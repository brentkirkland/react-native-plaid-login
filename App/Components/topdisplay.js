'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var TopDisplay = React.createClass({

	render: function() {
		return (
			<View style={styles.space}/>

          	<View style={styles.top}>
              	<Text style={styles.welcome}>
                react-native-plaid-login
              	</Text>
         	</View>

          	<View style={styles.space}/>
		);
	}

})


module.exports = TopDisplay;