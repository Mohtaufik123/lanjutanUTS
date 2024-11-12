import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <Image
      style={{
        height: 120,
        width: 100,
        marginTop:-90,
        marginHorizontal:110,
      }}
      source={require('../assets/images/logo.png')}/>
            {/* Teks Silahkan Login */}
            <Text style={styles.headerText}>Silahkan Login</Text>

            {/* Input Email dengan Icon */}
            <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color="#666" style={styles.icon} />
                <TextInput
                    placeholder="Masukkan Email"
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            {/* Input Password dengan Icon */}
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#666" style={styles.icon} />
                <TextInput
                    placeholder="Masukkan Password"
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            {/* Tombol Login */}
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            {/* Teks Daftar Akun yang Dapat Diklik */}
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={styles.registerText}>Daftar Akun</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        padding: 10,
    },
    loginButton: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerText: {
        color: '#007bff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
