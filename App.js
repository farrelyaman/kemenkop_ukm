import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';

import Login from './src/pages/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
          backgroundColor='#E40001'
          barStyle='light-content'
      />
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
