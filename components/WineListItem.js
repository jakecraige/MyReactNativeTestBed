import React, {
  Component,
  Image,
  Text,
  View,
  StyleSheet,
} from 'react-native';

class WineListItem extends Component {
  render() {
    const wine = this.props.wine;
    return (
      <View>
        <Image
          source={{uri: wine.thumbnail}}
          style={styles.image}
        />
        <Text>{wine.title}</Text>
        <Text>{wine.reviewer}</Text>
      </View>
    );
  }
}

export default WineListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 150,
  },
});

