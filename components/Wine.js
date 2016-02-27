import React, {
  Component,
  Text,
  View,
  StyleSheet,
} from 'react-native';

class Wine extends Component {
  render() {
    const { wine } = this.props;

    return (
      <View>
        <Text>{wine.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
});

export default Wine;
