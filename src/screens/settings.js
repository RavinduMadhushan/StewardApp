import React, { Component } from "react";
import {
  View,
  Image,
  TouchableHighlight,
  Text,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
  TextInput
} from "react-native";
import { AsyncStorage } from "react-native";

export default class SettingScreen extends Component {
  state = {
    newad: "",
    newcode: "",
    url: "",
    code: ""
  };

  static navigationOptions = {
    title: "Sync with Server",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#ff9800"
    },
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
    )
  };

  componentDidMount() {
    this._retrieveCode();
    this._retrieveData();
  }

  _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      alert("Error saving data to database.");
    }
  };

  newAddress = () => {
    this.onNewAddress();
  };

  newCode = () => {
    this.onNewCode();
  };

  onNewAddress = async () => {
    let url = "http://" + this.state.newad + "/API/";
    try {
      await AsyncStorage.setItem("url", url);
      alert("Server Address successfully changed.");
      this._retrieveData();
      this.setState({ newad: "" });
    } catch (error) {
      alert("Error saving data to database.");
    }
  };

  onNewCode = async () => {
    let code = this.state.newcode;
    try {
      await AsyncStorage.setItem("poscode", code);
      alert("POS code successfully changed.");
      this._retrieveCode();
      this.setState({ newcode: "" });
    } catch (error) {
      alert("Error saving data to database.");
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("url");
      if (value !== null) {
        // We have data!!
        this.setState({ url: value });
      } else {
        this.setState({ url: "No server address specified." });
      }
    } catch (error) {
      alert(error);
    }
  };

  _retrieveCode = async () => {
    try {
      const value = await AsyncStorage.getItem("poscode");
      if (value !== null) {
        // We have data!!
        this.setState({ code: value });
      } else {
        this.setState({ code: "No POS Code specified." });
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <ImageBackground
        source={require("../images/BG.png")}
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <View style={{ margin: 10 }}>
          <Text style={{ color: "white", fontSize: 18 }}>Server Address :</Text>
          <TextInput
            style={{
              height: 50,
              backgroundColor: "white",
              margin: 10,
              borderWidth: 2,
              borderRadius: 5
            }}
            onChangeText={newad => this.setState({ newad })}
            value={this.state.newad}
          />

          <TouchableHighlight
            onPress={this.newAddress}
            style={{
              marginRight: 40,
              marginLeft: 40,
              marginBottom: 7,
              marginTop: 30,
              paddingTop: 5,
              paddingBottom: 5,
              backgroundColor: "#ff9800",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#fff",
              width: 320,
              height: 50,
              alignSelf: "center"
            }}
            underlayColor="#fff"
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                paddingTop: 5,
                fontSize: 18,
                fontWeight: "bold"
              }}
            >
              Change Address
            </Text>
          </TouchableHighlight>
        </View>

        <View style={{ margin: 10 }}>
          <Text style={{ color: "white", fontSize: 18 }}>
            POS Center Code :
          </Text>
          <TextInput
            style={{
              height: 50,
              backgroundColor: "white",
              margin: 10,
              borderWidth: 2,
              borderRadius: 5
            }}
            onChangeText={newcode => this.setState({ newcode })}
            value={this.state.newcode}
          />

          <TouchableHighlight
            onPress={this.newCode}
            style={{
              marginRight: 40,
              marginLeft: 40,
              marginBottom: 7,
              marginTop: 30,
              paddingTop: 5,
              paddingBottom: 5,
              backgroundColor: "#ff9800",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#fff",
              width: 320,
              height: 50,
              alignSelf: "center"
            }}
            underlayColor="#fff"
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                paddingTop: 5,
                fontSize: 18,
                fontWeight: "bold"
              }}
            >
              Change Code
            </Text>
          </TouchableHighlight>
        </View>
        <Text style={{ color: "white", fontSize: 18, margin: 10 }}>
          Server Address : {this.state.url}
        </Text>
        <Text style={{ color: "white", fontSize: 18, margin: 10 }}>
          POS Center Code : {this.state.code}
        </Text>
      </ImageBackground>
    );
  }
}
