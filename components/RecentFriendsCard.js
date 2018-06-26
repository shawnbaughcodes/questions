import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const RecentFriendsCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>Recent Friends & Questions</Text>
    </View>
  );
};

const styles = {
  container: {
    width: SCREEN_WIDTH / 2 - 30,
    height: SCREEN_HEIGHT / 3,
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    shadowRadius: 4,
    shadowColor: 'grey',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 }
  },
  headerStyle: {
    fontFamily: 'Avenir-Black',
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10
  }
};

export default RecentFriendsCard;
