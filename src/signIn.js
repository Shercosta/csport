import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignIn = () => {
    if (username === "user@ex.com" && password === "password") {
      alert("Login berhasil");
    } else {
      alert("Login gagal");
    }
  };
  const handleCreate = () => {
    // if (username === "user@ex.com" && password === "password") {
    //   alert("Login berhasil");
    // } else {
    //   alert("Login gagal");
    // }
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/amico.png")} />
      <Text style={styles.logoText}>C-Sports</Text>
      <Text style={styles.title}>Welcome Back!</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#fafafa"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#fafafa"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.signinBtn} onPress={handleSignIn}>
        <Text style={styles.signinText}>Sign in</Text>
      </TouchableOpacity>
      <Text style={styles.title}>OR</Text>
      <TouchableOpacity style={styles.signupBtn} onPress={handleCreate}>
        <Text style={styles.signupText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "25%",
    height: "25%",
    aspectRatio: "268/250.85",
  },
  container: {
    backgroundColor: "#7643ac",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    flex: 1,
  },
  logoText: {
    // fontFamily: "Open Sans",
    marginTop: "5%",
    textAlign: "center",
    color: "#fff",
    fontSize: 40,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  title: {
    marginTop: "5%",
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  inputView: {
    width: 250,
    backgroundColor: "#7643ac",
    height: 50,
    marginBottom: 20,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#fafafa",
  },
  inputText: {
    fontSize: 15,
    left: -20,
    height: 20,
    color: "#fafafa",
  },
  signinBtn: {
    width: 150,
    backgroundColor: "#fafafa",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  signinText: {
    color: "#7643ac",
    fontWeight: "bold",
    fontSize: 18,
  },
  signupBtn: {
    width: 200,
    backgroundColor: "#7643ac",
    borderColor: "#fafafa",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  signupText: {
    fontSize: 18,
    color: "#fafafa",
    fontWeight: "bold",
  },
});
