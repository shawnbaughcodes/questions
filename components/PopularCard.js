import React from 'react';
import { View, Text } from 'react-native';
const PopularCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>Todays Popular Topics</Text>
    </View>
  );
};

const styles = {
  container: {
    width: 120,
    height: 100,
    borderRadius: 20,
    backgroundColor: 'pink',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerStyle: {
    fontFamily: 'Avenir-Black'
  }
};

export default PopularCard;
