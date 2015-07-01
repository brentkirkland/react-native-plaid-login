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

var Question = React.createClass({

});

var stles = StyleSheet.create({

});

module.exports = Question;
