import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import ListItem from "./ListItem";

const Todo = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Addding items to list
  const handleAddTask = () => {
    Keyboard.dismiss();
    task.length > 0 && setTaskList([...taskList, task]);
    setTask("");
  };

  const onTaskComplete = (index) => {
    let completeTemp = [...completedTasks];
    let itemsCopy = [...taskList];
    let completedTask = itemsCopy.splice(index, 1); // Delete item from the list

    if (completedTask.length > 0) {
      completeTemp.push(completedTask[0]); // Adding item to completed list
    }
    setTaskList(itemsCopy);
    setCompletedTasks(completeTemp);
  };

  const deleteTask = (index, isComplete) => {
    if (isComplete) {
      let itemsCopy = [...completedTasks];
      itemsCopy.splice(index, 1);
      setCompletedTasks(itemsCopy);
    } else {
      let itemsCopy = [...taskList];
      itemsCopy.splice(index, 1);
      setTaskList(itemsCopy);
    }
  };

  const ListElement = (index, item, isComplete = false) => (
    <ListItem
      key={index}
      text={item}
      onCheckboxSelect={() => onTaskComplete(index)}
      onDeleteTask={() => deleteTask(index, isComplete)}
      selected={!taskList.includes(item)}
    />
  );

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>My tasks</Text>
          <View style={styles.items}>
            {taskList.map((item, index) => ListElement(index, item))}
          </View>
          {completedTasks.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Completed tasks</Text>
              <View style={styles.items}>
                {completedTasks.map((item, index) =>
                  ListElement(index, item, true)
                )}
              </View>
            </>
          )}
        </View>
      </ScrollView>

      {/* Write a task */}
      
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Tasks to do"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});

export default Todo;
