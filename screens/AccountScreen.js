import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const AccountScreen = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>Account</Text>
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
    justifyContent: 'center',
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
  }
};

export default AccountScreen;
