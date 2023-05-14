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
import Workout from "./Workout";

const Record = () => {
    const navigation = useNavigation();
    const running = () => {
      navigation.navigate("Running");
    };
    const ProfileScreen = () => {
      navigation.navigate("ProfileScreen");
    };
    const Workout = () => {
      navigation.navigate("Workout");
    };
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Personal Record</Text>
        <View style={styles.content}>
            <View style={styles.infoContainer}>
            <Image
                source={require("../assets/squat.png")}
                style={{width: 150, height: 150 }}
            />
            <Text style={styles.infoValue}>80 kg</Text>
            </View>
            <View style={styles.infoContainer}>
            <Image
                source={require("../assets/bench-press.png")}
                style={{width: 150, height: 150 }}
            />
            <Text style={styles.infoValue}>70 kg</Text>
            </View>
            <View style={styles.infoContainer}>
            <Image
                source={require("../assets/deadlift.png")}
                style={{width: 150, height: 150 }}
            />
            <Text style={styles.infoValue}>140 kg</Text>
            </View>
        </View>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <AntDesign name="Trophy" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons 
          name="barbell-sharp" 
          size={40} 
          color="#818181" 
          onPress={Workout}
          />
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
          <MaterialIcons
            name="account-circle"
            size={40}
            color="#818181"
            onPress={ProfileScreen}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 40,
  },
  content: {
    flex: 1,
    alignItems: "center",
    borderRadius: 100,
    justifyContent: "center",
    alignItems:"center",
    marginTop: 10,
  },
  textHeader: {
    fontSize: 45,
    fontWeight: "bold",
    position: "absolute",
    top: 90,
    left: 40,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    width: "80%",
    padding: 10,
    borderRadius: 10,
  },
  infoLabel: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000000",
  },
  infoValue: {
    fontSize: 40,
    color: "#000000",
  },
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
    paddingTop: 30,
  },
});

export default Record;
