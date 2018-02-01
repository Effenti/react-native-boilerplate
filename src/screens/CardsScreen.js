import React from 'react';
import { StyleSheet, ScrollView, Image, Text } from 'react-native';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class CardsScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <WingBlank>
          <WhiteSpace />
          <Card>
            <Card.Header
              title="This is the title"
              thumb={
                <Image
                  style={{ width: 24, height: 24, marginRight: 10 }}
                  source={{ uri: 'https://lh3.googleusercontent.com/kIy-fJ9XgrZlOeMRUY5lJslDDhTCxddxh9Vwpitm-vOaFkYgLW0yFGcpgfWYatFwrVE=w300' }}
                />
              }
              extra={<Text>This is extra</Text>}
            />
            <Card.Body>
              <WingBlank>
                <Text>This is content of the card</Text>
              </WingBlank>
            </Card.Body>
            <Card.Footer content="Footer content" extra={<Text>Extra footer content</Text>} />
          </Card>
          <WhiteSpace />
        </WingBlank>
        <Card full>
          <Card.Header
            title="This is the title"
            thumb={
              <Image
                style={{ width: 23, height: 24, marginRight: 10 }}
                source={{ uri: 'https://lh3.googleusercontent.com/kIy-fJ9XgrZlOeMRUY5lJslDDhTCxddxh9Vwpitm-vOaFkYgLW0yFGcpgfWYatFwrVE=w300' }}
              />
            }
            extra={<Text>This is extra</Text>}
          />
          <Card.Body>
            <WingBlank>
              <Text>This is content of card</Text>
            </WingBlank>
          </Card.Body>
          <Card.Footer content="Footer content" extra={<Text>Extra footer content</Text>} />
        </Card>
      </ScrollView>
    );
  }
}
