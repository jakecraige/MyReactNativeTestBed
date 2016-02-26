import React, {
  Component,
  Text,
  View
} from 'react-native';
import WineListItem from './WineListItem';

class WineList extends Component {
  render() {
    const {wines} = this.props;
    return (
      <View>
        {wines.map(wine => <WineListItem wine={wine} key={wine.title} />)}
      </View>
    );
  }
}

export default WineList;
