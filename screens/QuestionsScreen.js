import React from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import { Icon, Badge } from 'react-native-elements';

import QuestionCard from '../components/QuestionCard';

const SCREEN_WIDTH = Dimensions.get('window').width;

const QuestionsScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.topicsHeadingStyle}>Topics</Text>
      <View style={styles.topicsContainer}>
        <ScrollView horizontal style={styles.topicsScroll}>
          <Badge containerStyle={styles.badgeStyle}>
            <Text>Topic</Text>
          </Badge>
          <Badge containerStyle={styles.badgeStyle}>
            <Text>Topic</Text>
          </Badge>
          <Badge containerStyle={styles.badgeStyle}>
            <Text>Topic</Text>
          </Badge>
        </ScrollView>
      </View>
      <ScrollView>
        <View style={styles.questionsScroll}>
          <QuestionCard />
          <QuestionCard />
        </View>
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
  topicsHeadingStyle: {
    fontSize: 30,
    fontFamily: 'Avenir-Black',
    alignSelf: 'flex-start',
    paddingLeft: 10
  },
  topicsScroll: {
    width: SCREEN_WIDTH,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 20
  },
  topicsContainer: {
    height: 70
  },
  badgeStyle: {
    height: 40,
    backgroundColor: 'teal',
    marginLeft: 5,
    marginRight: 5
  },
  questionsScroll: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: SCREEN_WIDTH
  }
};

export default QuestionsScreen;
