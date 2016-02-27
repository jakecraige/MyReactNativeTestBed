import React, {
  Component,
  Text,
  TouchableHighlight,
  Alert,
  View,
  StyleSheet,
  Navigator,
} from 'react-native';
import wines from '../data';
import WineList from './WineList';
import Wine from './Wine';

class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'Wine List', index: 0}}
        renderScene={this.renderScene}
      />
    );
  }

  renderScene(route, navigator) {
    switch(route.name) {
      case 'Wine List':
        return (
          <View style={styles.container}>
            <WineList wines={wines} viewWine={wine => {
              navigator.push({name: 'Wine', wine})
            }} />
          </View>
        );
      case 'Wine':
        return (
          <View style={styles.container}>
            <Wine wine={route.wine} />
          </View>
        )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
});

export default App;
