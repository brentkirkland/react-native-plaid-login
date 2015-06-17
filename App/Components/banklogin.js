'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  PixelRatio,
  ScrollView,
  TouchableHighlight,
} = React;

var KeyboardEvents = require('react-native-keyboardevents');
var KeyboardEventEmitter = KeyboardEvents.Emitter;

var BankLogin = React.createClass({
  getInitialState: function() {
      KeyboardEventEmitter.on(KeyboardEvents.KeyboardDidShowEvent, (frames) => {
          this.setState({keyboardSpace: frames.end.height});
      });
      KeyboardEventEmitter.on(KeyboardEvents.KeyboardWillHideEvent, (frames) => {
          this.setState({keyboardSpace: 0});
      });
      return {
        keyboardSpace: 0,
      };
  },
	render: function(){
		return(
      <View
      style={styles.container}>
          <View style={styles.space}/>
          <View style={styles.top}>
					<Text style={styles.bank}>{this.props.route.props}</Text>
          </View>
          <View style={styles.space}/>
           <View style={styles.space2}>
              <Text style={styles.instructions}>
                Enter Your Username and Password
              </Text>
          </View>

          <View style={styles.row}>
					       <TextInput placeholderTextColor={'#ADB7C0'} style={styles.textInput} autoCorrect={false} placeholder={'username'}/>
          </View>
          <View style={styles.row}>
					       <TextInput placeholderTextColor={'#ADB7C0'} style={styles.textInput} password={true} placeholder={'password'}/>
          </View>
          <View style={styles.bottom}></View>
          <View style={
            {height: 50 + this.state.keyboardSpace,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',}
          }>

            <TouchableHighlight
            underlayColor='#E6E9EC'
            onPress={() => this.props.navigator.pop()}
            style={styles.button2}>
              <Text style={styles.cancel}>
                Cancel
              </Text>
            </TouchableHighlight>

            <TouchableHighlight
            underlayColor='#E6E9EC'
            onPress={() => this.props.navigator.pop()}
            style={styles.button}>
              <Text style={styles.signIn}>
                Sign In
              </Text>
            </TouchableHighlight>
          </View>
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
  signIn: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    margin: 10,
  },
  cancel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#001D39',
    textAlign: 'center',
    marginRight: 10,
  },
  instructions: {
    fontSize: 10,
    textAlign: 'left',
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#fff',
  },
  textInput: {
  	height: 50,
  	color: '#001D39',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
   topContainer: {
   	height: 500,
    alignItems: 'center',
  },
  space: {
    height: 90,
    backgroundColor: '#f7fafa',
  },
  button: {
    flex: 1,
    height: 40,
    backgroundColor: '#001D39',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 10,
    borderRadius: 1,
    opacity: .40,
  },
  button2: {
    flex: 1,
    height: 40,
    backgroundColor: '#f7fafa',
    justifyContent: 'center',
    marginRight: 5,
    marginLeft: 10,
    borderRadius: 1,
    borderColor: '#E6E9EC',
    borderWidth: 1/PixelRatio.get(),
  },
  space2: {
    justifyContent: 'center',
    height: 30,
    backgroundColor: '#001D39',
  },
  top: {
    height: 70,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#f7fafa',
    padding: 20,
  },
  bottom: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  row: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderBottomColor: '#E6E9EC',
    marginTop: 1,
    marginLeft: 10,
    borderBottomWidth: 1/PixelRatio.get(),
  },
  row2: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 1,
    marginLeft: 10,
  },
 });

module.exports = BankLogin;
