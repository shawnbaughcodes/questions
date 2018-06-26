import React from 'react';
import { View, Text } from 'react-native';

const QuestionCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardHeader}>Header</Text>
      <Text style={styles.cardBody}>Question Content</Text>
    </View>
  );
};

const styles = {
  container: {
    width: 155,
    height: 300,
    backgroundColor: 'pink',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15
  },
  cardHeader: {
    fontFamily: 'Avenir-Black',
    fontSize: 20,
    marginBottom: 75
  },
  cardBody: {
    fontFamily: 'Avenir',
    fontSize: 15
  }
};

export default QuestionCard;
