import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { AppColors, AppFonts } from './../../theme/index';
import I18n from './../../i18n/i18n';
import Main from './../../screens/MainScreen';
import AppSizes from './../../theme/sizes';
import PdfScreen from '../../screens/PdfScreen';
import ButtonsScreen from '../../screens/ButtonsScreen';
import CardsScreen from '../../screens/CardsScreen';

// STYLES
const styles = StyleSheet.create({
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

// OPTIONS FOR NAVIGATOR HEADER
const getOptions = (title, headerBackgroundColor, headerTextColor, headerBorderBottomWidth) => ({
  title: <Text numberOfLines={1}>{title}</Text>,
  headerStyle: {
    backgroundColor: headerBackgroundColor,
    borderBottomWidth: headerBorderBottomWidth,
  },
  headerBackTitle: null,
  headerTitleStyle: AppSizes.screen.width,
  headerTintColor: headerTextColor,
});

export default connect(mapStateToProps)(AppWithNavigationState);

// ALL THE SCREENS GO HERE
export const AppNavigator = StackNavigator({
  Main: {
    screen: Main,
    navigationOptions: getOptions(I18n.t('navBar.effenti'), AppColors.lightGrey, AppColors.brand.secondary, 1),
  },
  PdfScreen: {
    screen: PdfScreen,
    navigationOptions: getOptions(I18n.t('navBar.pdfScreen'), AppColors.lightGrey, AppColors.brand.secondary, 1),
  },
  ButtonsScreen: {
    screen: ButtonsScreen,
    navigationOptions: getOptions(I18n.t('navBar.buttonsScreen'), AppColors.lightGrey, AppColors.brand.secondary, 1),
  },
  CardsScreen: {
    screen: CardsScreen,
    navigationOptions: getOptions(I18n.t('navBar.cardsScreen'), AppColors.lightGrey, AppColors.brand.secondary, 1),
  },
});
