import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const FriendCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.friendsHeader}>Friend</Text>
    </View>
  );
};

const styles = {
  friendsHeader: {
    fontFamily: 'Avenir-Black',
    fontSize: 20
  },
  container: {
    width: SCREEN_WIDTH / 2 - 20,
    backgroundColor: 'pink',
    height: SCREEN_WIDTH / 2 - 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
};

export default FriendCard;
