import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import {
  createDrawerNavigator,
  createSwitchNavigator,
  SafeAreaView
} from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import QuestionsScreen from './screens/QuestionsScreen';
import FriendsScreen from './screens/FriendsScreen';
import AccountScreen from './screens/AccountScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class App extends React.Component {
  render() {
    const RootNavigator = createSwitchNavigator({
      login: { screen: LoginScreen },
      main: createDrawerNavigator(
        {
          Home: { screen: HomeScreen },
          Questions: { screen: QuestionsScreen },
          Friends: { screen: FriendsScreen },
          Account: { screen: AccountScreen }
        },
        styles.drawerStyles
      )
    });

    return (
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <RootNavigator />
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH
  },
  drawerStyles: {
    useNativeAnimations: true,
    drawerBackgroundColor: 'teal'
  },
  addFriendIcon: {
    position: 'absolute',
    bottom: 50,
    right: 15
  }
};
