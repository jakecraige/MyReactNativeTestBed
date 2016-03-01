import React, {
  AppRegistry,
  Component,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import WineListScreen from './components/WineListScreen';

class MyReactNativeTestBed extends Component {
  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
          I'm in the Drawer!
        </Text>
      </View>
    );
    const openDrawer = this.openDrawer.bind(this);
    return (
      <DrawerLayoutAndroid
        ref={'drawer'}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={{flex: 1}}>
          <ToolbarAndroid
            title=""
            style={styles.toolbar}
            navIcon={require('./assets/menu_black_24dp.png')}
            onIconClicked={openDrawer}
          />
          <WineListScreen />
        </View>
      </DrawerLayoutAndroid>
    );
  }

  openDrawer() {
    this.refs.drawer.openDrawer();
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: "#bbb",
    height: 52,
  }
})

AppRegistry.registerComponent('MyReactNativeTestBed', () => MyReactNativeTestBed);
