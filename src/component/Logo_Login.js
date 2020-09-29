import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { render } from 'react-dom';

export default function Logo_Login() {
    return(
        <View style={styles.container}>
            <Image style={{width:110, height:120}}
                source={require('../../assets/garuda.png')}/>
            <Text style={styles.LogoText}>
                Welcome Back!
            </Text>
            <Text style={styles.LogoText_2}>
                Please, Sign In to Continue
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    LogoText:{
        marginTop: 15,
        marginBottom: 7,
        fontSize: 21,
        color:'#000',
        fontWeight: 'bold',
    }
  });