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

const Running = () => {
  const navigation = useNavigation();
  const Profile = () => {
    navigation.navigate("ProfileScreen");
  };
  const handleStart = () => {
    navigation.navigate("StartRunning");
  };
  const leaderboard = () => {
    navigation.navigate("Leaderboard");
  };
  const Workout = () => {
    navigation.navigate("Workout");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8}>
          <FontAwesome5
            name="shoe-prints"
            size={40}
            color={"white"}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={leaderboard}>
          <MaterialIcons
            name="leaderboard"
            size={40}
            color={"#808080"}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image
          source={require("../assets/run.png")}
          style={{ width: 200, height: 200 }}
        />
        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <AntDesign name="Trophy" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons 
          name="barbell-sharp" 
          size={40} 
          color="white" 
          onPress={Workout}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="running" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            name="account-circle"
            size={40}
            color="white"
            onPress={Profile}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#7642ac",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
  },

  icon: {
    marginHorizontal: 40,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  startButton: {
    marginTop: 20,
    backgroundColor: "#7642ac",
    borderRadius: 100,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  startButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
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

export default Running;
