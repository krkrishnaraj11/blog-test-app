import {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {View} from '@ant-design/react-native';
import Images from '../../assets/images/ImagePath';
import {UserAPI} from '../../api/userApi';

const width = Dimensions.get('window').width * 0.7;

const CustomDrawer = (props: any) => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    UserAPI.get(2).then(user => {
      setUserDetails(user);
    });
  }, []);

  return (
    <DrawerContentScrollView style={{backgroundColor: '#b5C645'}} {...props}>
      <View style={styles.container}>
        <Image source={Images.common.profile} style={styles.profileIconStyle} />
        <Text style={styles.userName}>{userDetails?.username}</Text>
      </View>
      <DrawerItem
        activeBackgroundColor="#656566"
        style={styles.drawerItem}
        focused={
          props.state.index ===
          props.state.routes.findIndex((e: {name: string}) => e.name === 'Home')
        }
        label="Home"
        labelStyle={styles.labelStyle}
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
      <DrawerItem
        activeBackgroundColor="#656566"
        style={styles.drawerItem}
        focused={
          props.state.index ===
          props.state.routes.findIndex((e: {name: string}) => e.name === 'Blog')
        }
        label="Blog"
        labelStyle={styles.labelStyle}
        onPress={() => {
          props.navigation.navigate('Blog');
        }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
    backgroundColor: '#B5C645',
  },
  profileIconStyle: {
    height: width / 2,
    width: width / 2,
    alignSelf: 'center',
    borderRadius: width / 2,
  },
  userName: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: width / 30,
  },
  drawerItem: {
    width: width,
    // backgroundColor: '#656566',
    margin: 4,
  },
  labelStyle: {
    color: '#609806',
    fontSize: 20,
    alignSelf: 'center',
  },
});
