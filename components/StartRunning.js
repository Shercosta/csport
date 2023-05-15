import React, { useState, useEffect, useRef} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import * as Location from 'expo-location';
import config from "../config";

const StartRunning = () => {
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [run, setRun] = useState(true)
  const navigation = useNavigation();
  const timeRef = useRef(time);
  const disatanceRef = useRef(distance);
  const runRef = useRef(run);

  const handleDone = () => {
    runRef.current = false
    setRun(runRef.current)
    setTimeout(() => {
      timeRef.current = 0
      disatanceRef.current = 0
      setDistance(disatanceRef.current)
      setTime(timeRef.current)
    }, 1000)
    navigation.navigate("Leaderboard");
  };

  // Fungsi untuk mengubah derajat ke radian
  const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  const calculateDistance = (latitude1, longitude1, latitude2, longitude2) => {
    const R = 6371; // Radius bumi dalam kilometer
    const lat1 = toRadians(latitude1);
    const lon1 = toRadians(longitude1);
    const lat2 = toRadians(latitude2);
    const lon2 = toRadians(longitude2);
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c * 1000; // Mengubah jarak menjadi meter
    return distance;
  };

  const updateLocation = () => {
    const url = config.baseUrl + '/api/me/location'
    const body = {time: timeRef.current, distance: disatanceRef.current}
    axios.put(url, body).catch((res) => {})
  }

  useEffect(() => {
    // Get current lotions.
    Location.requestForegroundPermissionsAsync().then(async({status}) => {
      if (status ==='granted') {
        const startLocation = await Location.getCurrentPositionAsync()
        const interval = setInterval(async() => {
          const location = await Location.getCurrentPositionAsync()
          const pointA = {latitude: startLocation.coords.latitude, longitude: startLocation.coords.longitude}
          const pointB = {latitude: location.coords.latitude, longitude: location.coords.longitude}
          const geoDistance = calculateDistance(pointA.latitude, pointA.longitude, pointB.latitude, pointB.longitude)
          console.log({geoDistance})
          const disatance = Math.floor(geoDistance)
          disatanceRef.current = disatance
          setDistance(disatanceRef.current)
          updateLocation()
          if (!runRef.current) {
            clearInterval(interval)
          }
        }, 2000)
      }
    }).catch(() => {})
  }, [])

  useEffect(() => {
    runRef.current = true
    setRun(runRef.current)
    const interval = setInterval(() => {
      timeRef.current = timeRef.current + 1
      setTime(timeRef.current)
      updateLocation()
      if (!runRef.current) {
        clearInterval(interval)
      }
    }, 1000);
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
