import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Button} from "react-native";
import {
  AntDesign,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import Record from "./Record";
import Running from "./Running";

  
const Powerlifting= () => {
    const [squatWeight1, setSquatWeight1] = useState(0);
    const [squatWeight2, setSquatWeight2] = useState(0);
    const [benchPressWeight1, setBenchPressWeight1] = useState(0);
    const [benchPressWeight2, setBenchPressWeight2] = useState(0);
    const [deadliftWeight1, setDeadliftWeight1] = useState(0);
    const [deadliftWeight2, setDeadliftWeight2] = useState(0);
    const [squatReps1, setSquatReps1] = useState(0);
    const [squatReps2, setSquatReps2] = useState(0);
    const [benchPressReps1, setBenchPressReps1] = useState(0);
    const [benchPressReps2, setBenchPressReps2] = useState(0);
    const [deadliftReps1, setDeadliftReps1] = useState(0);
    const [deadliftReps2, setDeadliftReps2] = useState(0);

    const navigation = useNavigation();

    const handleFinish = () => {
        console.log('Squat Weight 1:', squatWeight1);
        console.log('Squat Weight 2:', squatWeight2);
        console.log('Bench Press Weight 1:', benchPressWeight1);
        console.log('Bench Press Weight 2:', benchPressWeight2);
        console.log('Deadlift Weight 1:', deadliftWeight1);
        console.log('Deadlift Weight 2:', deadliftWeight2);
        console.log('Squat Reps 1:', squatReps1);
        console.log('Squat Reps 2:', squatReps2);
        console.log('Bench Press Reps 1:', benchPressReps1);
        console.log('Bench Press Reps 2:', benchPressReps2);
        console.log('Deadlift Reps 1:', deadliftReps1);
        console.log('Deadlift Reps 2:', deadliftReps2);
        navigation.navigate("Record");
    };
  
    const handleSquatWeight1Change = (text) => {
      setSquatWeight1(parseInt(text));
    };
  
    const handleSquatWeight2Change = (text) => {
      setSquatWeight2(parseInt(text));
    };
  
    const handleBenchPressWeight1Change = (text) => {
      setBenchPressWeight1(parseInt(text));
    };
  
    const handleBenchPressWeight2Change = (text) => {
      setBenchPressWeight2(parseInt(text));
    };
  
    const handleDeadliftWeight1Change = (text) => {
      setDeadliftWeight1(parseInt(text));
    };
  
    const handleDeadliftWeight2Change = (text) => {
      setDeadliftWeight2(parseInt(text));
    };
    
    const handleSquatReps1Change = (text) => {
      setSquatReps1(parseInt(text));
    };
  
    const handleSquatReps2Change = (text) => {
      setSquatReps2(parseInt(text));
    };
  
    const handleBenchPressReps1Change = (text) => {
      setBenchPressReps1(parseInt(text));
    };
  
    const handleBenchPressReps2Change = (text) => {
      setBenchPressReps2(parseInt(text));
    };
  
    const handleDeadliftReps1Change = (text) => {
      setDeadliftReps1(parseInt(text));
    };
  
    const handleDeadliftReps2Change = (text) => {
      setDeadliftReps2(parseInt(text));
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            navigation.goBack()
        }}>
        <MaterialIcons 
        name='keyboard-backspace' 
        size={50} 
        color='black'
        style={styles.icon}
        />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Powerlifting</Text>
        <View style={styles.content}>
            <Text style={styles.infoLabel}>Squat</Text>
            <View style={styles.row}>
                <View style={styles.column}>
                <Text style={styles.infoValue}>SET</Text>
                </View>
                <View style={styles.column}>
                <Text style={styles.infoValue}>WEIGHT</Text>
                </View>
                <View style={styles.column}>
                <Text style={styles.infoValue}>REPS</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                <Text style={styles.infoValue} color="black">1</Text>
                </View>
                <View style={styles.columnInput}>
                    <TextInput
                    onChangeText={handleSquatWeight1Change}
                    keyboardType="numeric"
                    placeholder="Ex: 80"
                    style={styles.inputText}
                    />
                </View>
                <View style={styles.columnInput}>
                    <TextInput
                    onChangeText={handleSquatReps1Change}
                    keyboardType="numeric"
                    placeholder="Ex: 3"
                    style={styles.inputText}
                    />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                <Text style={styles.infoValue}>2</Text>
                </View>
                <View style={styles.columnInput}>
                    <TextInput
                    onChangeText={handleSquatWeight2Change}
                    keyboardType="numeric"
                    placeholder=""
                    style={styles.inputText}
                    />
                </View>
                <View style={styles.columnInput}>
                    <TextInput
                    onChangeText={handleSquatReps2Change}
                    keyboardType="numeric"
                    placeholder=""
                    style={styles.inputText}
                    />
                </View>
            </View>
            <Text style={styles.infoLabel}>Bench Press</Text>
            <View style={styles.row}>
                <View style={styles.column}>
                <Text style={styles.infoValue}>SET</Text>
                </View>
                <View style={styles.column}>
                <Text style={styles.infoValue}>WEIGHT</Text>
                </View>
                <View style={styles.column}>
                <Text style={styles.infoValue}>REPS</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                <Text style={styles.infoValue}>1</Text>
                </View>
                <View style={styles.columnInput}>
                    <TextInput
                    onChangeText={handleBenchPressWeight1Change}
                    keyboardType="numeric"
                    placeholder="Ex: 80"
                    style={styles.inputText}
                    />
                </View>
                <View style={styles.columnInput}>
                    <TextInput
                    onChangeText={handleBenchPressReps1Change}
                    keyboardType="numeric"
                    placeholder="Ex: 3"
                    style={styles.inputText}
                    />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                <Text style={styles.infoValue}>2</Text>
                </View>
                <View style={styles.columnInput}>
                    <TextInput
                    onChangeText={handleBenchPressWeight2Change}
                    keyboardType="numeric"
                    placeholder=""
                    style={styles.inputText}
                    />
                </View>
                <View style={styles.columnInput}>
                    <TextInput
                    onChangeText={handleBenchPressReps2Change}
                    keyboardType="numeric"
                    placeholder=""
                    style={styles.inputText}
                    />
                </View>
            </View>
            <Text style={styles.infoLabel}>Deadlift</Text>
            <View style={styles.row}>
                <View style={styles.column}>
                <Text style={styles.infoValue}>SET</Text>
                </View>
                <View style={styles.column}>
                <Text style={styles.infoValue}>WEIGHT</Text>
                </View>
                <View style={styles.column}>
                <Text style={styles.infoValue}>REPS</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                <Text style={styles.infoValue}>1</Text>
                </View>
                <View style={styles.columnInput}>
                    <TextInput
                    onChangeText={handleDeadliftWeight1Change}
                    keyboardType="numeric"
                    placeholder="Ex: 80"
                    style={styles.inputText}
                    />
                </View>
                <View style={styles.columnInput}>
                    <TextInput
                    onChangeText={handleDeadliftReps1Change}
                    keyboardType="numeric"
                    placeholder="Ex: 3"
                    style={styles.inputText}
                    />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                <Text style={styles.infoValue}>2</Text>
                </View>
                <View style={styles.columnInput}>
                    <TextInput
                    onChangeText={handleDeadliftWeight2Change}
                    keyboardType="numeric"
                    placeholder=""
                    style={styles.inputText}
                    />
                </View>
                <View style={styles.columnInput}>
                    <TextInput
                    onChangeText={handleDeadliftReps2Change}
                    keyboardType="numeric"
                    placeholder=""
                    style={styles.inputText}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.FinishBtn} onPress={handleFinish}>
            <Text style={styles.FinishBtnText}>FINISH WORKOUT</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  };
  

  const styles = StyleSheet.create({
    icon: {
      marginHorizontal: 30,
      paddingTop: 20,
      alignSelf: "flex-end",
    },
    content: {
      flex: 1,
      alignItems: "flex-start",
    //   borderRadius: 100,
    //   justifyContent: "center",
      margin: 30,
      marginTop: 70,
    //   backgroundColor: "black"
    },
    textHeader: {
      fontSize: 45,
      fontWeight: "bold",
      position: "absolute",
      top: 90,
      left: 40,
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 35,
        borderRadius: 10,
        margin: 5,
    },
    columnInput: {
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 35,
        borderRadius: 10,
        margin: 5,
        backgroundColor: "#D9D9D9",
    },
    inputText: {
        fontSize: 20,
        justifyContent:"center",
        alignItems: "center",
        textAlign: "center",
        width: 100,
        height: 35,
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
      fontSize: 40,
      fontWeight: "bold",
      color: "#cc00ff",
    },
    infoValue: {
      fontSize: 24,
      color: "#A97C7C",
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: 30,
    },
    FinishBtn: {
        margin: 20,
        marginLeft: 70,
        backgroundColor: "#7642ac",
        borderRadius: 10,
        width: 200,
        justifyContent: "center",
        alignContent: "center",
        height: 50,
    },
    FinishBtnText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
  });

  export default Powerlifting;
  
