/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {hp, wp} from '../../components/responsive-dimension';
import {images} from '../../images';

const {icons} = images;

const DrawerContentItems = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView style={{}} {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={icons.home}
                  resizeMode="contain"
                  style={styles.icon}
                />
              )}
              label="Home"
              labelStyle={styles.label}
              onPress={() => {
                props.navigation.closeDrawer();
                props.navigation.navigate('Dashboard');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={icons.refer}
                  resizeMode="contain"
                  style={styles.icon}
                />
              )}
              label="Redux Data"
              labelStyle={styles.label}
              onPress={() => {
                props.navigation.closeDrawer();
                props.navigation.navigate('Redux');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={icons.creditCardIcon}
                  resizeMode="contain"
                  style={styles.icon}
                />
              )}
              label="Payment"
              labelStyle={styles.label}
              onPress={() => {
                props.navigation.closeDrawer();
                props.navigation.navigate('Payment');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={icons.headPhones}
                  resizeMode="contain"
                  style={styles.icon}
                />
              )}
              label="Support"
              labelStyle={styles.label}
              onPress={() => {
                props.navigation.closeDrawer();
                props.navigation.navigate('Support');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={icons.clockIcon}
                  resizeMode="contain"
                  style={styles.icon}
                />
              )}
              label="History"
              labelStyle={styles.label}
              onPress={() => {
                props.navigation.closeDrawer();
                props.navigation.navigate('History');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  source={icons.logOut}
                  resizeMode="contain"
                  style={styles.icon}
                />
              )}
              label="Logout"
              labelStyle={styles.label}
              onPress={() => {
                props.navigation.closeDrawer();
                props.navigation.navigate('Login');
              }}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    position: 'relative',
    paddingTop: hp(15),
  },
  icon: {
    height: hp(30),
    width: wp(30),
  },
  label: {
    color: '#2D3652',
    fontSize: 18,
    fontWeight: '600',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
});

export default DrawerContentItems;
