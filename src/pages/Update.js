import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput, 
    TouchableOpacity
} from 'react-native';
import { render } from 'react-dom';

export default function Update() {
    return(
        <View style={styles.container}>
            <Text
                style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: 10,
                }}>
                Update Profile
            </Text>
            <Text
                style={{
                    alignSelf: 'center',
                    fontSize: 15,
                    color: '#8492A6',
                    marginBottom: 80,
                }}>
                Farrel Yaman
            </Text>

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
            placeholder='Address'
            secureTextEntry={true}
            />
            <TextInput 
            style={styles.inputBox} 
            underlineColorAndroid='#C0CCDA'
            placeholder='Phone'
            secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Update
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
      marginTop: 50,
    },
    inputBox: {
        width: 300,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 20,
    },
    button: {
        width: 250,
        backgroundColor: '#E40001',
        borderRadius: 15,
        marginVertical: 15,
        paddingVertical: 10,
        marginTop: 50,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    }
  });