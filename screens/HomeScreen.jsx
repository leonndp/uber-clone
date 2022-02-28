import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import SafeViewAndroid from "../components/SafeViewAndroid";

const HomeScreen = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Text style={styles.text}>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
