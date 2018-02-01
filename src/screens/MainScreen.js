import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

const MainScreen = ({ goToPdfScreen }) => (
  <ScrollView style={styles.container}>
    <Button
      title={'PDF Viewer'}
      onPress={goToPdfScreen}
    />
  </ScrollView>
);

const mapDispatchToProps = dispatch => ({
  goToPdfScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'PdfScreen' })),
});

export default connect(null, mapDispatchToProps)(MainScreen);
