import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './navigation/Routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
