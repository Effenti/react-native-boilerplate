import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { AppColors, AppFonts } from './../../theme/index';
import I18n from './../../i18n/i18n';
import Main from './../../screens/MainScreen';

// STYLES
const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: AppFonts.family.raleway,
    fontWeight: AppFonts.weight.normal,
    letterSpacing: AppFonts.letterSpacing.half,
  },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

// MAP STATE TO PROPS
const mapStateToProps = state => ({
  nav: state.nav,
});

// OPTIONS FOR NAVIGATOR
const getOptions = (title, headerBackgroundColor, headerTextColor, headerBorderBottomWidth) => ({
  title: <Text style={styles.headerTitle} numberOfLines={1}>{title}</Text>,
  headerStyle: {
    backgroundColor: headerBackgroundColor,
    borderBottomWidth: headerBorderBottomWidth,
  },
  headerBackTitle: null,
  headerTitleStyle: { width: Dimensions.get('window').width },
  headerTintColor: headerTextColor,
});

export default connect(mapStateToProps)(AppWithNavigationState);

// ALL THE SCREENS GO HERE
export const AppNavigator = StackNavigator({
  Main: {
    screen: Main,
    navigationOptions: getOptions('Effenti', AppColors.lightGrey, AppColors.brand.secondary, 0),
  },
});
