import React, {
  Component,
  Text,
  ListView,
  View
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
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={wine => <WineListItem wine={wine} key={wine.title} />}
      />
    );
  }
}

export default WineList;
