import React, {
  AppRegistry,
  Component,
  TabBarIOS,
  Text,
  View,
} from 'react-native';
import WineListScreen from './components/WineListScreen';
import SettingsScreen from './components/SettingsScreen';

const tabNames = [
  "Wine List",
  "Settings"
];

const TabItem = ({index, selectedTab, selectTab, children}) => {
  const name = tabNames[index];
  return (
    <TabBarIOS.Item
      title={name}
      selected={selectedTab == name}
      onPress={() => selectTab(name)}
    >
      {children}
    </TabBarIOS.Item>
  );
}

class MyReactNativeTestBed extends Component {
  constructor(props) {
    super(props)

    this.state = { selectedTab: tabNames[1] };
  }

  render() {
    const tabOpts = {
      selectedTab: this.state.selectedTab,
      selectTab: (name) => { this.setState({selectedTab: name}) }
    };

    return (
      <TabBarIOS>
        <TabItem index={0} {...tabOpts}>
          <WineListScreen />
        </TabItem>

        <TabItem index={1} {...tabOpts}>
          <SettingsScreen />
        </TabItem>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('MyReactNativeTestBed', () => MyReactNativeTestBed);
