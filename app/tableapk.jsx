import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AbsensiScreen = () => {
    // Fungsi untuk menangani klik ikon
    const handlePress = (type) => {
        Alert.alert(`Anda menekan ikon ${type}`);
    };

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
            {/* Teks Motivasi */}
            <Text style={styles.motivationalText}>Semangat bekerja "waktu adalah uang"</Text>
            {/* Ikon Absensi */}
            <View style={styles.iconContainer}>
                {/* Absensi Masuk */}
                <TouchableOpacity style={styles.iconButton} onPress={() => handlePress('Absensi Masuk')}>
                    <Icon name="sign-in" size={30} color="#4CAF50" />
                    <Text style={styles.iconText}>Absensi Masuk</Text>
                </TouchableOpacity>

                {/* Absensi Keluar */}
                <TouchableOpacity style={styles.iconButton} onPress={() => handlePress('Absensi Keluar')}>
                    <Icon name="sign-out" size={30} color="#F44336" />
                    <Text style={styles.iconText}>Absensi Keluar</Text>
                </TouchableOpacity>

                {/* Mulai Istirahat */}
                <TouchableOpacity style={styles.iconButton} onPress={() => handlePress('Mulai Istirahat')}>
                    <Icon name="coffee" size={30} color="#FFC107" />
                    <Text style={styles.iconText}>Mulai Istirahat</Text>
                </TouchableOpacity>

                {/* Selesai Istirahat */}
                <TouchableOpacity style={styles.iconButton} onPress={() => handlePress('Selesai Istirahat')}>
                    <Icon name="check-square" size={30} color="#03A9F4" />
                    <Text style={styles.iconText}>Selesai Istirahat</Text>
                </TouchableOpacity>

                {/* Shift */}
                <TouchableOpacity style={styles.iconButton} onPress={() => handlePress('Shift')}>
                    <Icon name="clock-o" size={30} color="#9C27B0" />
                    <Text style={styles.iconText}>Shift</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F0F0F0',
    },
    motivationalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333',
        textAlign: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    iconButton: {
        alignItems: 'center',
        margin: 10,
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: 2,
    },
    iconText: {
        marginTop: 5,
        fontSize: 14,
        color: '#333',
    },
});

export default AbsensiScreen;
