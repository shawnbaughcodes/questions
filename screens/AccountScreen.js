import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Icon, Avatar, Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const AccountScreen = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Avatar
        size="xlarge"
        rounded
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
        }}
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
        containerStyle={styles.avatarContainer}
        avatarStyle={styles.avatarPicture}
      />
      <Text style={styles.userName}>User Name</Text>
      <Button title="Logout" buttonStyle={styles.logoutButton} />
      <Button title="Delete Account" buttonStyle={styles.deleteButton} />
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
  },
  avatarPicture: {
    height: 300,
    width: 300,
    borderRadius: 150,
    backgroundColor: 'white'
  },
  avatarContainer: {
    height: 300,
    borderRadius: 150,
    backgroundColor: 'white',
    marginBottom: 20
  },
  userName: {
    fontFamily: 'Avenir-Black',
    fontSize: 35
  },
  logoutButton: {
    backgroundColor: 'black',
    borderRadius: 30,
    marginBottom: 60,
    marginTop: 20
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 50,
    marginTop: 30
  }
};

export default AccountScreen;
