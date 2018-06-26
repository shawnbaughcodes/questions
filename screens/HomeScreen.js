import React from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import PopularCard from '../components/PopularCard';
import RecentFriendsCard from '../components/RecentFriendsCard';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.popularHeading}>Todays Popular Topics</Text>
      <View style={styles.popularCards}>
        <ScrollView horizontal>
          <PopularCard />
        </ScrollView>
      </View>
      <View style={styles.recentFriends}>
        <Text style={styles.popularHeading}>Recently Asked</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.recentFriendsScroll}>
            <RecentFriendsCard />
            <RecentFriendsCard />
            <RecentFriendsCard />
          </View>
        </ScrollView>
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
  popularCards: {
    width: SCREEN_WIDTH,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#EDF1F2'
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
  popularHeading: {
    fontSize: 30,
    fontFamily: 'Avenir-Black',
    alignSelf: 'flex-start',
    paddingLeft: 10
  },
  recentFriendsHeading: {
    fontSize: 30,
    fontFamily: 'Avenir-Black',
    alignSelf: 'left',
    paddingLeft: 10
  },
  recentFriends: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - 250,
    paddingTop: 15,
    borderTopColor: 'grey',
    borderTopWidth: 0.2,
    paddingLeft: 10,
    paddingRight: 10
  },
  recentFriendsScroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: SCREEN_WIDTH
    // justifyContent: 'center',
  }
};

export default HomeScreen;
