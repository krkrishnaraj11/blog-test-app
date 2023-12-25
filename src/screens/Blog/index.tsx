import {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {blogAPI} from '../../api/userApi';
import Images from '../../assets/images/ImagePath';
import Header from '../../components/Header';

const {height, width} = Dimensions.get('window');

const Blog = (props: any) => {
  const navigation = props?.navigation;
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    blogAPI.getAll(1).then(blog => setBlogs(blog));
  }, []);

  const renderBlog = ({item}) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('Details', {
            screen: 'BlogDetails',
            params: {
              item,
            },
          })
        }
        style={styles.itemContainer}>
        <View style={styles.itemTitleBody}>
          <Image source={Images.common.profile} style={styles.itemIcon} />
          <Text style={styles.itemTitle}>{item?.title}</Text>
        </View>
        <View>
          <Text style={styles.itemBody}>{item?.body}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View>
      <Header navigation={navigation} drawer={true} title={'Blog'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={blogs}
        renderItem={renderBlog}
      />
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: height / 100,
    backgroundColor: '#CC344444',
    marginHorizontal: width / 100,
    padding: 10,
    borderRadius: width / 50,
  },
  itemTitleBody: {
    flexDirection: 'row',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'capitalize',
    paddingHorizontal: width / 40,
  },
  itemBody: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
    marginLeft: width / 10,
    paddingHorizontal: width / 40,
  },
  itemIcon: {
    height: width / 10,
    width: width / 10,
    alignSelf: 'center',
    borderRadius: width / 2,
  },
});
