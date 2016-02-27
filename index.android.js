import React, {
  AppRegistry,
  Component,
} from 'react-native';
import WineListScreen from './components/WineListScreen';

class MyReactNativeTestBed extends Component {
  render() {
    return (
      <WineListScreen />
    );
  }
}

AppRegistry.registerComponent('MyReactNativeTestBed', () => MyReactNativeTestBed);
