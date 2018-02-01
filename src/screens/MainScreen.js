import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { NavigationActions } from 'react-navigation';

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

const MainScreen = ({ goToPdfScreen, goToButtonsScreen, goToCardsScreen }) => (
  <ScrollView style={styles.container}>
    <WingBlank>
      <WhiteSpace />
      <Button
        type={'primary'}
        onClick={goToPdfScreen}
      >
        PDF Viewer
      </Button>
      <WhiteSpace />
      <Button
        type={'primary'}
        onClick={goToButtonsScreen}
      >
        Buttons
      </Button>
      <WhiteSpace />
      <Button
        type={'primary'}
        onClick={goToCardsScreen}
      >
        Cards
      </Button>
    </WingBlank>
  </ScrollView>
);

const mapDispatchToProps = dispatch => ({
  goToPdfScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'PdfScreen' })),
  goToButtonsScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'ButtonsScreen' })),
  goToCardsScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'CardsScreen' })),
});

export default connect(null, mapDispatchToProps)(MainScreen);
