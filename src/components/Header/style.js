import {Platform, StyleSheet} from 'react-native';
import {wp, hp, deviceWidth, paddingTopiOS} from '../responsive-dimension';

export const styles = StyleSheet.create({
  headerTitle: {
    fontSize: hp(28),
    color: '#000',
  },
  headerRightButtonTitle: {
    fontSize: hp(14),
  },
  headerRightIcon: {
    height: wp(20),
    width: wp(20),
    resizeMode: 'contain',
  },
  headerLeftIcon: {
    height: wp(30),
    width: wp(30),
    resizeMode: 'contain',
  },
  headerLeftIconContainer: {
    position: 'absolute',
    left: wp(10),
  },
  headerRightIconContainer: {
    position: 'absolute',
    right: wp(20),
  },
  navBar: {
    width: '100%',
    backgroundColor: 'white',
    height: hp(52),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(20),
  },
  headerContainer: {
    width: deviceWidth,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? paddingTopiOS : hp(0),
  },
  buttonContainer: {
    width: wp(75),
    height: hp(60),
    justifyContent: 'flex-end',
    opacity: 0.8,
    paddingBottom: hp(14),
    paddingLeft: wp(12),
  },
});
