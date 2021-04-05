/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {images} from '../images';
import Header from '../components/Header';
import {hp, paddingTop} from '../components/responsive-dimension';
import DrawerContent from '../navigations/custom/DrawerContent';
import {createDrawerNavigator} from '@react-navigation/drawer';

const {icons} = images;

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        leftIcon={icons.alignLeft}
        onPressLeftIcon={() => navigation.toggleDrawer()}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: hp(20)}}>Home Screen</Text>
      </View>
    </View>
  );
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: paddingTop + hp(10),
  },
});
