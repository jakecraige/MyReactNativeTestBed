import React, {
  Component,
  Text,
  TouchableHighlight,
  Alert,
  View,
  StyleSheet,
} from 'react-native';
import wines from '../data';
import WineList from './WineList';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WineList wines={wines} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});

export default App;
