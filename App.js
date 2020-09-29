import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';

import Update from './src/pages/Update';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
          backgroundColor='#E40001'
          barStyle='light-content'
      />
      <Update/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});
