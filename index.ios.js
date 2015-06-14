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

var banks = ['American Express', 'Bank of America', 'Capital One 360',
            'Charles Schwab', 'Chase', 'Citi', 'Fidelity', 'PNC',
            'Silicon Valley Bank', 'US Bank', 'USAA', 'Wells Fargo']

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
      <ScrollView showsVerticalScrollIndicator={false} onScroll={this.handleScroll} style={styles.scrollView} stickyHeaderIndices={[0,1]} bounces={true}>
        <View style={styles.space}>
        </View>
        <View style={styles.top}>
          <Text style={styles.welcome}>
            react-native-plaid-login
          </Text>
          <Text style={styles.instructions}>
            Login into your bank to get started
          </Text>
        </View>
        <View style={styles.space}>
        </View>
        <View style={styles.bottom}>
          <ListView
          dataSource={this.state.dataSource.cloneWithRows(banks)}
          renderRow={this._renderRow}
          showsVerticalScrollIndicator={true}
          style={styles.listView}/>
      </View>
  </ScrollView>
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
    padding: 10
  },
  space: {
    height: 100,
    backgroundColor: '#1a1a1a',
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  scrollView2: {
    backgroundColor: '#fff',
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
    marginTop: 10,
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
