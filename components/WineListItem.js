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
      <View style={styles.row}>
        <Image
          source={{uri: wine.thumbnail}}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{wine.title}</Text>
          <Text>{wine.reviewer}</Text>
        </View>
      </View>
    );
  }
}

export default WineListItem;

const styles = StyleSheet.create({
  row: {
    marginBottom: 5
  },
  image: {
    height: 150
  },
  content: {
    alignItems: "center",
    paddingTop: 4,
    paddingBottom: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

