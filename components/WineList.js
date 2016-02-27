import React, {
  Component,
  Text,
  ListView,
  View,
  TouchableHighlight,
} from 'react-native';
import WineListItem from './WineListItem';

class WineList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.title !== r2.title
    });

    this.state =  {
      dataSource: ds.cloneWithRows(props.wines),
    };
  }

  render() {
    const {viewWine} = this.props;
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(wine) =>
          <TouchableHighlight onPress={() => viewWine(wine)}>
            <View>
              <WineListItem wine={wine} key={wine.title} />
            </View>
          </TouchableHighlight>
        }
      />
    );
  }
}

export default WineList;
