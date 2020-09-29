import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';

import Home from './src/pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
          backgroundColor='#E40001'
          barStyle='light-content'
      />
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});
