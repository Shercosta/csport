import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import {
  AntDesign,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import Record from "./Record";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const running = () => {
    navigation.navigate("Running");
  };
  const EditProfile = () => {
    navigation.navigate("EditProfile");
  };
  const SignIn = () => {
    navigation.navigate("SignIn");
  };
  const Workout = () => {
    navigation.navigate("Workout");
  };
  const Record = () => {
    navigation.navigate("Record");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Profile</Text>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/ddraodqz5/image/upload/v1664331064/DSC_0103_b_pzic4p.webp",
          }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Name</Text>
          <Text style={styles.infoValue}>BilhaqAD</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Age</Text>
          <Text style={styles.infoValue}>21</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Height</Text>
          <Text style={styles.infoValue}>172 cm</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Weight</Text>
          <Text style={styles.infoValue}>79 kg</Text>
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("Edit Profile");
            }}
          >
            <Text style={styles.btntext}>EDIT PROFILE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn1}
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <Text style={styles.btntext}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <AntDesign 
          name="Trophy" 
          size={40} 
          color="#818181" 
          onPress={Record}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons 
          name="barbell-sharp" 
          size={40} 
          color="#818181"
          onPress={Workout} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5
            name="running"
            size={40}
            color="#818181"
            onPress={running}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="account-circle" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "#490959",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  textHeader: {
    fontSize: 45,
    fontWeight: "bold",
    position: "absolute",
    top: 65,
    left: 40,
  },
  coverImage: {
    height: 200,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 110,
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  content: {
    marginTop: 20,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    width: "90%",
    padding: 10,
    borderRadius: 10,
  },
  infoLabel: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000000",
  },
  infoValue: {
    fontSize: 25,
    color: "#000000",
  },
  btn: {
    backgroundColor: "#7642AC",
    width: "50%",
    alignItems: "center",
    paddingVertical: 10,
    color: "white",
    borderRadius: 5,
  },
  btn1: {
    backgroundColor: "#535353",
    width: "40%",
    alignItems: "center",
    paddingVertical: 10,
    color: "white",
    borderRadius: 5,
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProfileScreen;
