import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

type Props = {};

const AbsenMasukScreen = (props: Props) => {
  const [absenMasukTime, setAbsenMasukTime] = useState(null);

  const handleAbsenMasuk = () => {
    const currentTime = new Date().toLocaleString(); // Dapatkan tanggal dan waktu saat ini
    setAbsenMasukTime(currentTime);

    // Menampilkan pesan konfirmasi
    Alert.alert("Absen Masuk", `Anda telah absen masuk pada ${currentTime}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Absen Masuk Pegawai</Text>

      {/* Tampilkan waktu absen masuk jika sudah absen */}
      {absenMasukTime ? (
        <Text style={styles.absenText}>
          Waktu Absen Masuk: {absenMasukTime}
        </Text>
      ) : (
        <Text style={styles.absenText}>Anda belum melakukan absen masuk</Text>
      )}

      {/* Tombol Absen Masuk */}
      <TouchableOpacity style={styles.absenButton} onPress={handleAbsenMasuk}>
        <Text style={styles.buttonText}>Absen Masuk</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  absenText: {
    fontSize: 16,
    color: "#333",
    marginVertical: 10,
  },
  absenButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AbsenMasukScreen;
G;
