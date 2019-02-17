import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
  Image,
  StyleSheet,
  ScrollView
} from "react-native";

class CompleteOrderScreen extends Component {
  state = {};
  static navigationOptions = {
    title: "Order Completion",
    headerTintColor: "white",
    headerRight: (
      <Image
        style={{
          width: 40,
          height: 40,
          marginTop: 2,
          marginRight: 8
        }}
        source={require("../images/Orange_Logo.png")}
      />
    ),
    headerStyle: {
      backgroundColor: "#ff9800"
    }
  };
  render() {
    return (
      <ImageBackground
        source={require("../images/BG.png")}
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          flexDirection: "column",
          alignItems: "center"
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#ff9800",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: 280,
    height: 50
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
    paddingTop: 5,
    fontSize: 18
  }
});

export default CompleteOrderScreen;
