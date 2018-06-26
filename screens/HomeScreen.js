import React from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import PopularCard from '../components/PopularCard';

const SCREEN_WIDTH = Dimensions.get('window').width;
const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.popularHeading}>Todays Popular Topics</Text>
      <ScrollView horizontal style={styles.popularCards}>
        <PopularCard />
      </ScrollView>
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
  popularHeading: {
    fontSize: 30,
    fontFamily: 'Avenir-Black',
    alignSelf: 'left',
    paddingLeft: 10
  }
};

export default HomeScreen;
