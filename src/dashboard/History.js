/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import {hp, paddingTop} from '../components/responsive-dimension';

const History = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        tintColor="#000"
        hasBackButton
        onPressLeftIcon={() => navigation.goBack()}
        headerTitle="History"
      />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: paddingTop + hp(10),
  },
});
