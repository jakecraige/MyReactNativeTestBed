import React, {
  Component,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import WineListItem from './WineListItem';

class Wine extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.settings}>
          Some Settings...
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  settings: {
    fontSize: 20
  }
});

export default Wine;
