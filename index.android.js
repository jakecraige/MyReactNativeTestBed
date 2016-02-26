import React, {
  AppRegistry,
  Component,
} from 'react-native';
import App from './components/App';

class MyReactNativeTestBed extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('MyReactNativeTestBed', () => MyReactNativeTestBed);
