'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  PixelRatio,
} = React;

var BankLogin = React.createClass({
 
	render: function(){
		console.log(this.props)
		return(
			<View style={styles.container}>
          <View style={styles.space}/>
          <View style={styles.top}>
					<Text style={styles.bank}>{this.props.route.props}</Text>
          </View>
          <View style={styles.space}/>
           <View style={styles.space2}>
              <Text style={styles.instructions}>
                Sign In
              </Text>
          </View>
					<TextInput placeholderTextColor={'#ADB7C0'} style={styles.textInput} placeholder={'username'}/>
					<TextInput placeholderTextColor={'#ADB7C0'} style={styles.textInput} password={true} placeholder={'password'}/>
			</View>
		)
		

	},

});

var styles = StyleSheet.create({
  bank: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#001D39',
    marginTop: 10,
  },
  instructions: {
    fontSize: 10,
    textAlign: 'left',
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#fff',
  },
  textInput: {
    fontWeight: 'bold',
    fontSize: 14,
  	height: 50,
  	color: '#001D39',
  	backgroundColor: '#fff',
  	marginTop: 1,
  	paddingLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#f7fafa',
  },
   topContainer: {
   	height: 500,
    alignItems: 'center',
  },
  space: {
    height: 85,
  },
  space2: {
    justifyContent: 'center',
    height: 30,
    backgroundColor: '#001D39',
  },
  top: {
    height: 85,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#f7fafa',
    padding: 20,
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#f7fafa',
    padding: 20,
  },
 });

module.exports = BankLogin;