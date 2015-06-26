'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  PixelRatio,
  ScrollView,
  Image,
} = React;

var banks = ['American Express', 'Bank of America', 'Capital One 360',
            'Charles Schwab', 'Chase', 'Citi', 'Fidelity', 'PNC',
            'Silicon Valley Bank', 'US Bank', 'USAA', 'Wells Fargo'];

var BankLogin = require('./banklogin.js')

var BankLoginSelect = React.createClass({

  getInitialState: function() {
  //var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return {
    test: false
  };
  },

  render: function(){

    return (
      <ScrollView
      onScroll={this._handleScroll}
      scrollEventThrottle={50}
      automaticallyAdjustContentInsets={false}
      style={styles.scrollView}
      stickyHeaderIndices={[0,1]}>

          <View style={styles.space}/>

          <View style={[styles.top, this.state.test && styles.top2]}>
              <Image
                resizeMode={'contain'}
              source={require('image!plaidlogo')}></Image>
          </View>

          <View style={styles.space}/>

          <View style={styles.space2}>
              <Text style={styles.instructions}>
                Select Your Bank
              </Text>
          </View>

          <View style={styles.bottom}>

              {banks.map(this._createBankRows)}

          </View>

      </ScrollView>
    );
  },
  _createBankRows: function(bank, i){
      return (
        <TouchableHighlight
        underlayColor='#f7fafa'
        onPress={() => this.props.navigator.push({
          title: bank,
          component: BankLogin,
          props: bank,
        })}
        key={i}>
          <View style={this._selectStyle(bank)} key={i}>
              <Text style={styles.bank}>{bank}</Text>
          </View>
        </TouchableHighlight>
      )
  },
  _selectStyle: function(bank){
    if (bank === 'Wells Fargo'){
      return styles.row2;
    } else {
      return styles.row;
    }
  },
  _onCellPress: function(bank){
    console.log(event)
  },
  _handleScroll: function(event: Object){
    if (event.nativeEvent.contentOffset.y > 188) {
      this.setState({test: true})
    }
    else {
      this.setState({test: false})
    }
  },

});

var styles = StyleSheet.create({
  bank: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#001D39'
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  instructions: {
    fontSize: 10,
    textAlign: 'left',
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#fff',
  },
  row: {
    marginLeft: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderBottomColor: '#E6E9EC',
    borderBottomWidth: 1/PixelRatio.get(),
  },
  row2: {
    marginLeft: 10,
    height: 50,
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f7fafa',
  },
  space: {
    height: 95,
    backgroundColor: '#f7fafa',
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
    paddingTop: 30,
  },
  top2: {
    height: 70,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#f7fafa',
    padding: 20,
    borderBottomColor: '#001D39',
    borderBottomWidth: 1/PixelRatio.get(),
  },
  welcome: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#001D39',
    marginTop: 10,
  },
});

module.exports = BankLoginSelect;
