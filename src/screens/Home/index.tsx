import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Images from '../../assets/images/ImagePath';
import {useEffect, useState} from 'react';
import {UserAPI} from '../../api/userApi';
import Header from '../../components/Header';

const {width, height} = Dimensions.get('window');

const Home = props => {
  const navigation = props?.navigation;
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    UserAPI.get(2).then(user => {
      setUserDetails(user);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} drawer={true} title={'Home'} />
      <Image source={Images.common.profile} style={styles.profileIconStyle} />
      <Text style={styles.userName}>{userDetails?.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height / 2,
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
});

export default Home;
