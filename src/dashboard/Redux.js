/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {hp} from '../components/responsive-dimension';
import {setSearchField, requestRobots} from '../store/actions/cats';
import {connect} from 'react-redux';
import Header from '../components/Header';

const Redux = props => {
  React.useEffect(() => {
    props.onRequestRobots();
  }, []);

  console.log(props.robots);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        tintColor="#2D3652"
        onPressLeftIcon={() => props.navigation.goBack()}
        hasBackButton
        headerTitle="Redux Data"
      />
      <View style={styles.dataContainer}>
        <FlatList
          data={props.robots}
          contentContainerStyle={{paddingBottom: hp(40)}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => (
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  infoContainer: {
    height: hp(200),
    width: hp(170),
    backgroundColor: '#50B648',
    margin: hp(5),
    borderRadius: hp(10),
  },
  dataContainer: {
    marginHorizontal: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: hp(15),
    padding: hp(10),
  },
});
