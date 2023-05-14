import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import config from "../config";

const StartRunning = () => {
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Leaderboard");
  };

  useEffect(() => {
    let interval = null;

    const startStopwatch = () => {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        setDistance((prevDistance) => prevDistance + 1);
      }, 1000);
    };

    startStopwatch();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.label}>TIME:</Text>
        <Text style={styles.value}>
          <Text style={styles.timeText}>{formatTime(time)}</Text>
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>DISTANCE:</Text>
        <Text style={styles.value}>{distance} M</Text>
      </View>
      <TouchableOpacity style={styles.startButton} onPress={handleDone}>
        <Text style={styles.startButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  item: {
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 50,
    marginBottom: 5,
  },
  value: {
    fontSize: 50,
    color: "#808080",
  },
  timeText: {
    fontSize: 50,
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
});

export default StartRunning;
