import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Link, router } from "expo-router";

const HomeScreen = () => {
  const handlePress = (type) => {
    Alert.alert(type, `Anda telah melakukan aktivitas ${type}.`);
  };

  return (
    <View style={styles.container}>
      <Image
        style={{
          height: 120,
          width: 100,
          marginTop: -90,
          marginBottom: 20,
        }}
        source={require("../../assets/images/logo.png")}
      />
      <Text style={styles.motivationalText}>
        Semangat bekerja "waktu adalah uang"
      </Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => handlePress("Absensi Masuk")}
        >
          <Icon name="sign-in" size={30} color="#4CAF50" />
          <Text style={styles.iconText}>Absensi Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => handlePress("Absensi Keluar")}
        >
          <Icon name="sign-out" size={30} color="#F44336" />
          <Text style={styles.iconText}>Absensi Keluar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => handlePress("Mulai Istirahat")}
        >
          <Icon name="coffee" size={30} color="#FFC107" />
          <Text style={styles.iconText}>Mulai Istirahat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => handlePress("Selesai Istirahat")}
        >
          <Icon name="check-square" size={30} color="#03A9F4" />
          <Text style={styles.iconText}>Selesai Istirahat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => handlePress("Shift")}
        >
          <Icon name="clock-o" size={30} color="#9C27B0" />
          <Text style={styles.iconText}>Shift</Text>
        </TouchableOpacity>
      </View>
      <Link href={"/"}>
        <Text style={styles.logoutText}>LOG OUT</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F0F0F0",
  },
  motivationalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
    textAlign: "center",
  },
  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  iconButton: {
    alignItems: "center",
    margin: 10,
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 2,
  },
  iconText: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },
  logoutText: {
    marginTop: 20,
    fontSize: 16,
    color: "#FF0000",
    fontWeight: "bold",
  },
});

export default HomeScreen;
