import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, ScrollView } from 'react-native';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class ButtonsScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <WingBlank>
          <WhiteSpace />
          <Button>Default</Button>
          <WhiteSpace />
          <Button disabled>Default disabled</Button>
          <WhiteSpace />
          <Button type="primary">Primary</Button>
          <WhiteSpace />
          <Button type="primary" disabled>Primary disabled</Button>
          <WhiteSpace />
          <Button type="warning">Warning</Button>
          <WhiteSpace />
          <Button type="warning" disabled>Warning disabled</Button>
          <WhiteSpace />
          <Button loading>Loading</Button>
          <WhiteSpace />
          <Button><Icon name="rocket" size={20} color="#000" /> Custom icon</Button>
          <WhiteSpace />
          <Button type="primary" inline style={{ marginRight: 4 }}>Inline primary</Button>
          <WhiteSpace />
          <Button type="ghost" inline style={{ marginRight: 4 }} className="am-button-borderfix">Inline ghost</Button>
          <WhiteSpace />
          <Button type="primary" inline size="small" style={{ marginRight: 4 }}>Primary small</Button>
          <WhiteSpace />
          <Button type="primary" inline size="small" disabled>Primary small disabled</Button>
          <WhiteSpace />
          <Button type="ghost" inline size="small" style={{ marginRight: 4 }}>Ghost small</Button>
          <WhiteSpace />
          <Button type="ghost" inline size="small" className="am-button-borderfix" disabled>Ghost disabled small</Button>
          <WhiteSpace />
        </WingBlank>
      </ScrollView>
    );
  }
}
