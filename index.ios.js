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
  PixelRatio
} = React;

var banks = ['American Express', 'Bank of America', 'Capital One 360', 'Charles Schwab', 'Chase', 'Citi', 'Fidelity', 'PNC', 'Silicon Valley Bank', 'US Bank', 'USAA', 'Wells Fargo']

var PlaidLogin = React.createClass({
  getInitialState: function(){
    return {
      store: banks,
      dataSource: new ListView.DataSource({
              rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  },
  _renderRow: function(bank){
    return (
      <View style={styles.row}>
        <Text style={styles.bank}>{bank}</Text>
      </View>
    );
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.welcome}>
            react-native-plaid-login
          </Text>
          <Text style={styles.instructions}>
            Login into your bank to get started
          </Text>
        </View>
        <View style={styles.bottom}>
          <ListView
          dataSource={this.state.dataSource.cloneWithRows(banks)}
          renderRow={this._renderRow}
          style={styles.listView}/>
      </View>
    </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  top: {
    flex: .5,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  listView: {
    backgroundColor: '#fff',
  },
  row: {
    marginLeft: 10,
    height: 50,
    justifyContent: 'center',
    borderBottomColor: '#1a1a1a',
    borderBottomWidth: 1/PixelRatio.get(),
  },
  welcome: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
  bank: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('PlaidLogin', () => PlaidLogin);
