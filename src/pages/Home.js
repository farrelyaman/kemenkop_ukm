import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { render } from 'react-dom';

export default function Home() {
    return(
        <View style={styles.container}>
            <View style={styles.cardsWrapper}>
                <Text
                style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#333',
                }}>
                Profile
                </Text>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                        source={require('../../assets/profile.png')}
                        style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Farrel Yaman</Text>
                        <Text style={styles.cardDetails}>
                        email
                        </Text>
                        <Text style={styles.cardDetails}>
                        Address
                        </Text>
                        <Text style={styles.cardDetails}>
                        Phone
                        </Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>
                                Update Profile
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cardButton}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                        source={require('../../assets/form.png')}
                        style={styles.formImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Form</Text>
                    </View>
                </View>
                <View style={styles.cardButton2}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                        source={require('../../assets/info.png')}
                        style={styles.formImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Details</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
      },
      card: {
        height: 150,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      cardButton: {
        height: 60,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: "#80C8EE",
        marginTop: 100,
      },
      cardButton2: {
        height: 60,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: "#E4F53A",
        marginTop: 50,
      },
      cardImgWrapper: {
        flex: 1,
      },
      cardImg: {
        height: '50%',
        width: '50%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        marginTop: 20,
      },
      formImg: {
        height: '90%',
        width: '50%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      },
      cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
      },
      cardTitle: {
        fontWeight: 'bold',
      },
      cardDetails: {
        fontSize: 12,
        color: '#444',
      },
      button: {
        width: 150,
        backgroundColor: '#E40001',
        borderRadius: 15,
        marginVertical: 15,
        paddingVertical: 10,
        marginTop: 100,
    },
    buttonText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    }
  });