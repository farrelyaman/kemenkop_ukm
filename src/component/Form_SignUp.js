import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput, 
    TouchableOpacity
} from 'react-native';
import { render } from 'react-dom';

export default function Form_SignUp() {
    return(
        <View style={styles.container}>
            <TextInput 
            style={styles.inputBox} 
            underlineColorAndroid='#C0CCDA'
            placeholder='E-mail'
            />
            <TextInput 
            style={styles.inputBox} 
            underlineColorAndroid='#C0CCDA'
            placeholder='Username'
            />
            <TextInput 
            style={styles.inputBox} 
            underlineColorAndroid='#C0CCDA'
            placeholder='Password'
            secureTextEntry={true}
            />
            <TextInput 
            style={styles.inputBox} 
            underlineColorAndroid='#C0CCDA'
            placeholder='Confirm Password'
            secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Sign Up
                </Text>
            </TouchableOpacity>        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputBox: {
        width: 300,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    button: {
        width: 250,
        backgroundColor: '#E40001',
        borderRadius: 15,
        marginVertical: 15,
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    }
  });