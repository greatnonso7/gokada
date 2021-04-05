import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../dashboard/index';

const AppStack = createStackNavigator();

const Navigation = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
};

export default Navigation;
