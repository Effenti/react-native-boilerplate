import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MainScreen = ({ }) => (
  <ScrollView style={styles.container}>
    <Button
      title={'Open Frequency'}
    />
  </ScrollView>
);

const mapDispatchToProps = dispatch => ({
  /*loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Login' })),*/
});

export default connect(null, mapDispatchToProps)(MainScreen);
