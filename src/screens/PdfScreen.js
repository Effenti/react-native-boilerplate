import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Pdf from 'react-native-pdf';

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class PdfScreen extends React.Component {
  render() {
    const guideSource = { uri: `https://bitcoin.org/bitcoin.pdf`, cache: true };

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
        />
        <Pdf
          source={guideSource}
          fitWidth
          style={styles.container}
          onError={(error) => {
            console.log(error);
          }}
        />
      </View>
    );
  }
}
