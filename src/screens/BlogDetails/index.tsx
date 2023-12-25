import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import {Button, Flex, WingBlank} from '@ant-design/react-native';
import {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {blogAPI} from '../../api/userApi';

const {height, width} = Dimensions.get('window');

const BlogDetails = props => {
  const {navigation, route} = props;
  const {id, userId, title, body} = route.params?.item;
  const [edit, setEdit] = useState(false);
  const [titleText, setTitleText] = useState(title);
  const [bodyText, setBodyText] = useState(body);

  const updateBlogData = () => {
    let item = route?.params?.item;
    let data = {...item, title: titleText, body: bodyText};
    console.log(userId, id);
    blogAPI.put(userId, id, data).then(() => setEdit(false));
  };

  return (
    <View>
      <Header navigation={navigation} drawer={false} title={'Blog Details'} />
      {edit ? (
        <View style={styles.editContainer}>
          <Text style={styles.itemTitle}>Title</Text>
          <TextInput
            value={titleText}
            placeholder="Enter Title"
            numberOfLines={3}
            multiline={true}
            onChangeText={text => setTitleText(text)}
            style={styles.titleInput}
          />
          <Text style={styles.itemTitle}>Body</Text>
          <TextInput
            value={bodyText}
            placeholder="Enter Body"
            numberOfLines={5}
            multiline={true}
            onChangeText={text => setBodyText(text)}
            style={styles.bodyInput}
          />
        </View>
      ) : (
        <View style={styles.itemContainer}>
          <View style={styles.itemTitleBody}>
            <Text style={styles.itemTitle}>{titleText}</Text>
          </View>
          <View>
            <Text style={styles.itemBody}>{bodyText}</Text>
          </View>
        </View>
      )}
      {edit ? (
        <WingBlank style={styles.wingContainer}>
          <Flex>
            <Flex.Item style={styles.actionBtnStyle}>
              <Button onPress={() => setEdit(false)} type="warning">
                Cancel
              </Button>
            </Flex.Item>
            <Flex.Item style={styles.actionBtnStyle}>
              <Button onPress={() => updateBlogData()} type="primary">
                Save
              </Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
      ) : (
        <WingBlank style={styles.wingContainer}>
          <Flex>
            <Flex.Item style={styles.actionBtnStyle}>
              <Button type="warning">Delete</Button>
            </Flex.Item>
            <Flex.Item style={styles.actionBtnStyle}>
              <Button onPress={() => setEdit(true)} type="primary">
                Edit
              </Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
      )}
    </View>
  );
};

export default BlogDetails;

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
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'capitalize',
    paddingHorizontal: width / 40,
    marginBottom: height / 30,
  },
  editContainer: {
    alignItems: 'center',
    marginTop: height / 25,
  },
  titleInput: {
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'capitalize',
    paddingHorizontal: width / 40,
    marginBottom: height / 30,
    borderWidth: 1,
    width: width / 1.2,
    backgroundColor: '#CC344444',
  },

  bodyInput: {
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'capitalize',
    paddingHorizontal: width / 40,
    marginBottom: height / 30,
    borderWidth: 1,
    width: width / 1.2,
    backgroundColor: '#CC344444',
  },
  itemBody: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
    paddingHorizontal: width / 40,
  },
  itemIcon: {
    height: width / 10,
    width: width / 10,
    alignSelf: 'center',
    borderRadius: width / 2,
  },
  wingContainer: {marginBottom: 5},
  actionBtnStyle: {paddingLeft: 4, paddingRight: 4},
});
