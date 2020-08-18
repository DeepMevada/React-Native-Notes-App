import React, { useEffect } from "react";
import { Text, StyleSheet, View, Button, AsyncStorage } from "react-native";

const HomeScreen = ({ navigation }) => {
  const name = "Deep Mevada";

  const getData = async () => {
    const value = await AsyncStorage.getItem("note");
    if (value != null) {
      console.log(value);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <View style={{ textAlign: "center" }}>
      <Text style={styles.text1}>Getting Started with react native!</Text>
      <Text style={styles.text2}>My name is {name}</Text>
      <Button
        title="Create Note"
        onPress={() => {
          navigation.navigate("Notes");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 45,
  },
  text2: {
    fontSize: 20,
  },
});

export default HomeScreen;
