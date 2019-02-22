import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
  Image,
  StyleSheet,
  ScrollView,
  AsyncStorage
} from "react-native";

class CompleteScreen extends Component {
  state = {
    currentorder: ""
  };

  componentDidMount() {
    //this._retrieveData();
  }
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("currentorder");
      if (value !== null) {
        this.setState({ currentorder: value });
      }
    } catch (error) {
      alert(error);
    }
  };

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
      >
        <Text style={{ color: "white", fontSize: "18" }}>
          {this.state.currentorder}
        </Text>
      </ImageBackground>
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

export default CompleteScreen;
