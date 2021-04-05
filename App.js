import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigations';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
