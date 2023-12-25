import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Blog from '../screens/Blog';
import CustomDrawer from '../components/CustomDrawer';
import {useWindowDimensions} from 'react-native';
import BlogDetails from '../screens/BlogDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const StackRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BlogDetails" component={BlogDetails} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: useWindowDimensions().width * 0.7},
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Blog" component={Blog} />
      <Drawer.Screen name="Details" component={StackRoute} />
    </Drawer.Navigator>
  );
};

export default Routes;
