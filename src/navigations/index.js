import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../dashboard/index';
import Redux from '../dashboard/Redux';
import History from '../dashboard/History';
import Support from '../dashboard/Support';
import Payment from '../dashboard/Payment';

const AppStack = createStackNavigator();

const Navigation = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="Redux"
        component={Redux}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="Support"
        component={Support}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
};

export default Navigation;
