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
} = React;

var banks = ['American Express', 'Bank of America', 'Capital One 360',
            'Charles Schwab', 'Chase', 'Citi', 'Fidelity', 'PNC',
            'Silicon Valley Bank', 'US Bank', 'USAA', 'Wells Fargo']

var BankLoginSelect = React.createClass({

  render: function(){

    return (
      <ScrollView
      automaticallyAdjustContentInsets={false}
      style={styles.scrollView}
      stickyHeaderIndices={[0,1]}>

          <View style={styles.space}/>

          <View style={styles.top}>
              <Text style={styles.welcome}>
                react-native-plaid-login
              </Text>
              <Text style={styles.instructions}>
                Login into your bank to get started
              </Text>
          </View>

          <View style={styles.space}/>

          <View style={styles.bottom}>

              {banks.map(this._createBankRows)}

          </View>

      </ScrollView>
    );
  },
  _createBankRows: function(bank, i){
    if (bank !== 'Wells Fargo'){
      return (
        <TouchableHighlight
        underlayColor='#f7fafa'>
          <View style={styles.row} key={i}>
              <Text style={styles.bank}>{bank}</Text>
          </View>
        </TouchableHighlight>
      )
    } else {
      return(
        <TouchableHighlight
        underlayColor='#f7fafa'>
          <View style={styles.row2} key={i}>
              <Text style={styles.bank}>{bank}</Text>
          </View>
        </TouchableHighlight>
      );
    }
  },

});

var styles = StyleSheet.create({
  bank: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#1a1a1a',
    marginBottom: 5,
  },
  row: {
    marginLeft: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderBottomColor: '#1a1a1a',
    borderBottomWidth: 1/PixelRatio.get(),
  },
  row2: {
    marginLeft: 10,
    height: 50,
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  space: {
    height: 100,
    backgroundColor: '#f7fafa',
  },
  top: {
    flex: .5,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#f7fafa',
    padding: 10
  },
  welcome: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1a1a1a',
    marginTop: 10,
  },
});

module.exports = BankLoginSelect;
