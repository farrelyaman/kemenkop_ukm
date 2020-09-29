import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { render } from 'react-dom';

import Logo_Login from '../component/Logo_Login.js';
import Form_Login from '../component/Form_Login.js';

export default function Login() {
    return(
        <View style={styles.container}>
            <Logo_Login/>
            <Form_Login/>
            <View style={styles.signinText}>
                <Text >
                    Don't have an account?
                </Text>   
                <Text style={styles.signinButton}> Sign Up</Text>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    signinText: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 20,
        flexDirection: 'row'
    },
    signinButton: {
        color: '#E40001',
        fontWeight: 'bold'
    }
  });