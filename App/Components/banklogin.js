'use strict';

var React = require('react-native');
var AnimationExperimental = require('AnimationExperimental');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  PixelRatio,
  ScrollView,
  TouchableHighlight,
  LayoutAnimation,
} = React;

var animations = {
  layout: {
    spring: {
      duration: 400,
      create: {
        duration: 300,
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 200,
      },
    },
    easeInEaseOut: {
      duration: 400,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleXY,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    },
  },
};

var KeyboardEvents = require('react-native-keyboardevents');
var KeyboardEventEmitter = KeyboardEvents.Emitter;

var BankLogin = React.createClass({
  getInitialState: function() {
    return {keyboardSpace: 0, space: 95};
  },
   updateKeyboardSpace: function(frames) {
    LayoutAnimation.configureNext(animations.layout.spring);
    this.setState({keyboardSpace: frames.end.height});

    if (frames.begin.y < 650){

      this.setState({space: 45});
    }
    if (frames.begin.y > 670){
      this.setState({space: 124});
    }
  },

  resetKeyboardSpace: function() {
    LayoutAnimation.configureNext(animations.layout.spring);
    this.setState({keyboardSpace: 0});
  },

  componentDidMount: function() {
    KeyboardEventEmitter.on(KeyboardEvents.KeyboardDidShowEvent, this.updateKeyboardSpace);
    KeyboardEventEmitter.on(KeyboardEvents.KeyboardWillHideEvent, this.resetKeyboardSpace);
  },

  componentWillUnmount: function() {
    KeyboardEventEmitter.off(KeyboardEvents.KeyboardDidShowEvent, this.updateKeyboardSpace);
    KeyboardEventEmitter.off(KeyboardEvents.KeyboardWillHideEvent, this.resetKeyboardSpace);
  },
	render: function(){
		return(
      <View
      style={styles.container}>
          <View style={{height: this.state.space,
              backgroundColor: '#f7fafa',}}/>
          <View style={styles.top}>
					<Text style={styles.bank}>{this.props.route.props}</Text>
          </View>
          <View style={{height: this.state.space,
              backgroundColor: '#f7fafa',}}/>
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
  	flex:1,
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
    height: 95,
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
