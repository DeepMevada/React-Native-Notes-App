import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Alert,
  AsyncStorage,
} from "react-native";
import { Icon } from "react-native-elements";

const NoteScreen = ({ navigation: { goBack } }) => {
  const [newNote, setNote] = useState({
    title: "",
    body: "",
  });
  const storeData = async (note) => {
    await AsyncStorage.setItem("note", JSON.stringify(note));
  };
  const confirmClear = () => {
    Alert.alert(
      "Confirm Clear All",
      "Are you Sure you want to clear all?",
      [
        {
          text: "Yes",
          onPress: () => {
            clearAllText();
          },
        },
        {
          text: "No",
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  const clearAllText = () => {
    setNote({ ...newNote, body: "" });
  };

  return (
    <View style={{ backgroundColor: "#eee", flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          height: 30,
          padding: 5,
          margin: 10,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Icon
          name="save"
          type="feather"
          color="#00adb5"
          onPress={() => {
            storeData(newNote);
            goBack();
          }}
        />
        <Icon name="folder-images" type="entypo" color="#00adb5" />
        <Icon
          name="clear"
          type="material"
          color="#00adb5"
          onPress={confirmClear}
        />
        <Icon name="more-vertical" type="feather" color="#00adb5" />
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.title}
          placeholder="Enter Title"
          placeholderTextColor="#222831"
          onChangeText={(newTitle) => setNote({ ...newNote, title: newTitle })}
          value={newNote.title}
        />
        <View style={{ borderBottomWidth: StyleSheet.hairlineWidth }}></View>
        <TextInput
          style={styles.textArea}
          multiline={true}
          numberOfLines={7}
          placeholder="Start writing..."
          placeholderTextColor="#393e46"
          onChangeText={(newBody) => setNote({ ...newNote, body: newBody })}
          value={newNote.body}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    padding: 5,
    margin: 10,
    backgroundColor: "#fff",
    borderColor: "#222831",
    borderWidth: 2,
    borderRadius: 5,
  },

  textArea: {
    height: 200,
    padding: 10,
    textAlignVertical: "top",
    fontSize: 16,
  },

  title: {
    padding: 10,
    height: 40,
    fontSize: 20,
    textAlign: "left",
  },
});
export default NoteScreen;
