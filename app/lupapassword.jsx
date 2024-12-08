import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    // Validasi email
    if (!email) {
      Alert.alert("Error", "Silakan masukkan email Anda.");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Silakan masukkan email yang valid.");
      return;
    }

    // Simulasi pengiriman email reset password
    // Anda dapat mengganti logika ini dengan API request ke backend
    Alert.alert(
      "Berhasil",
      `Email pemulihan telah dikirim ke ${email}. Silakan cek kotak masuk Anda.`
    );
    setEmail(""); // Reset input setelah berhasil
  };

  const validateEmail = (email) => {
    // Regex untuk validasi email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lupa Kata Sandi</Text>
      <Text style={styles.instruction}>
        Masukkan email Anda untuk menerima tautan pemulihan.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan email Anda"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Kirim</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  instruction: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#FFF",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ForgotPasswordScreen;
