import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { render } from 'react-dom';

import Logo_SignUp from '../component/Logo_SignUp.js';
import Form_SignUp from '../component/Form_SignUp.js';

export default function SignUp() {
    return(
        <View style={styles.container}>
            <Logo_SignUp/>
            <Form_SignUp/>
            <View style={styles.signinText}>
                <Text >
                    Already have an account?
                </Text>   
                <Text style={styles.signinButton}> Sign In</Text>
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