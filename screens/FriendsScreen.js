import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

import FriendCard from '../components/FriendCard';

const SCREEN_WIDTH = Dimensions.get('window').width;

const FriendsScreen = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.friendsHeader}>Friends</Text>
      <View style={styles.friendsContainer}>
        <FriendCard />
        <FriendCard />
        <FriendCard />
      </View>
      <Icon
        raised
        name="menu"
        type="ionicons"
        color="#f50"
        containerStyle={styles.menuIcon}
        onPress={() => props.navigation.openDrawer()}
      />
      <Icon
        raised
        name="add"
        type="ionicons"
        color="#f50"
        containerStyle={styles.addFriendIcon}
        onPress={() => console.log('hello')}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  menuIcon: {
    position: 'absolute',
    bottom: 10,
    left: 20
  },
  addFriendIcon: {
    position: 'absolute',
    bottom: 10,
    right: 20
  },
  friendsHeader: {
    fontSize: 30,
    fontFamily: 'Avenir-Black',
    alignSelf: 'flex-start',
    paddingLeft: 10
  },
  friendsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SCREEN_WIDTH,
    paddingLeft: 14,
    paddingRight: 13
  }
};

export default FriendsScreen;
