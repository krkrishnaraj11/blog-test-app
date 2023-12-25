import {View} from '@ant-design/react-native';
import {Dimensions, Image, Pressable, StyleSheet, Text} from 'react-native';
import Images from '../../assets/images/ImagePath';

const {height, width} = Dimensions.get('window');

const Header = (props: any) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Pressable
        style={{height: width / 14, width: width / 14}}
        onPress={() =>
          props.drawer ? navigation.openDrawer() : navigation.goBack()
        }>
        <Image
          source={props.drawer ? Images.common.menu : Images.common.back}
          style={{height: width / 20, width: width / 20}}
        />
      </Pressable>
      <Text style={styles.titleStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 12,
    width: width,
    padding: width / 25,
    backgroundColor: '#B5C645',
    flexDirection: 'row',
    paddingBottom: width / 15,
  },
  titleStyle: {
    fontSize: 22,
    textAlign: 'center',
    width: width / 1.2,
  },
});

export default Header;
