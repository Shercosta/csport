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
import Powerlifting from "./Powerlifting";

const Workout = () => {
    const navigation = useNavigation();
    const running = () => {
      navigation.navigate("Running");
    };
    const ProfileScreen = () => {
      navigation.navigate("ProfileScreen");
    };
    const Record = () => {
      navigation.navigate("Record");
    };
    const Powerlifting = () => {
      navigation.navigate("Powerlifting");
    };
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Workout</Text>
      <TouchableOpacity onPress={Powerlifting}>
        <View style={styles.content}>
            <View style={styles.boxContainer}>
                <Text style={styles.boxHead}>Powerlifting</Text>
                <View style={styles.boxContent}>
                    <Text style={styles.value}>2 X Squat</Text>
                    <Text style={styles.value}>2 X Bench Press</Text>
                    <Text style={styles.value}>2 X Deadlift</Text>
                </View>
            </View>
        </View>
      </TouchableOpacity>
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
          <Ionicons name="barbell-sharp" size={40} color="white" />
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
  },
  textHeader: {
    fontSize: 45,
    fontWeight: "bold",
    position: "absolute",
    top: 90,
    left: 40,
  },
  boxContainer: {
    alignItems: "flex-start",
    marginTop: 180,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    borderColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 16,
    width: 300,
    height: 200,
  },
  boxHead: {
    fontWeight: "bold",
    fontSize: 32,
    paddingBottom: 10,
  },
  boxContent: {
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
  },
  value: {
    fontSize: 20,
    marginTop: 12,
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

export default Workout;
