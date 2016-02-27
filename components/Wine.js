import React, {
  Component,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import WineListItem from './WineListItem';

class Wine extends Component {
  render() {
    const { wine } = this.props;

    return (
      <ScrollView>
        <WineListItem wine={wine} />
        <Text style={styles.description}>
          {wine.description}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    padding: 5,
  }
});

export default Wine;
