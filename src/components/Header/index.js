import React from 'react';
import {styles} from './style';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import backIcon from '../../assets/images/icons/arrow-left.png';

const Header = ({
  tintColor,
  backgroundColor,
  headerRight,
  headerLeft,
  headerTitle,
  leftIcon,
  rightIcon,
  leftIconStyle,
  rightIconStyle,
  onPressRightIcon,
  onPressLeftIcon,
  hasBackButton,
  headerRightButtonTitle,
  headerCenter,
}) => {
  const renderHeaderLeft = () => {
    if (headerLeft) {
      return <View style={styles.headerLeftIconContainer}>{headerLeft}</View>;
    }
    if (leftIcon || hasBackButton) {
      return (
        <TouchableOpacity
          hitSlop={hitSlop}
          onPress={onPressLeftIcon}
          style={styles.headerLeftIconContainer}>
          <Image
            source={leftIcon || backIcon}
            style={[styles.headerLeftIcon, leftIconStyle, {tintColor}]}
          />
        </TouchableOpacity>
      );
    }
  };

  const renderHeaderRight = () => {
    if (headerRight) {
      return <View style={styles.headerRightIconContainer}>{headerRight}</View>;
    }
    if (rightIcon) {
      return (
        <TouchableOpacity
          hitSlop={hitSlop}
          onPress={onPressRightIcon}
          style={styles.headerRightIconContainer}>
          <Image
            source={rightIcon}
            style={[styles.headerRightIcon, rightIconStyle, {tintColor}]}
          />
        </TouchableOpacity>
      );
    }
    if (headerRightButtonTitle) {
      return (
        <TouchableOpacity
          hitSlop={hitSlop}
          onPress={onPressRightIcon}
          style={styles.headerRightIconContainer}>
          <Text style={styles.headerRightButtonTitle}>
            {headerRightButtonTitle}
          </Text>
        </TouchableOpacity>
      );
    }
  };

  const renderHeaderTitle = () => {
    if (headerTitle) {
      return (
        <Text style={[styles.headerTitle, {color: tintColor}]}>
          {headerTitle}
        </Text>
      );
    }
    if (headerCenter) {
      return headerCenter;
    }
  };

  return (
    <View
      style={[
        styles.headerContainer,
        {backgroundColor: backgroundColor || '#fff'},
      ]}>
      <View
        style={[styles.navBar, {backgroundColor: backgroundColor || '#fff'}]}>
        {renderHeaderLeft()}
        {renderHeaderTitle()}
        {renderHeaderRight()}
      </View>
    </View>
  );
};

const hitSlop = {top: 10, left: 10, right: 10, bottom: 10};

export default Header;
