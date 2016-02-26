/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Text,
  View
} from 'react-native';
import styles from './app-styles';
import data from './data';

class MyReactNativeTestBed extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

AppRegistry.registerComponent('MyReactNativeTestBed', () => MyReactNativeTestBed);
