import React, { Component } from "react";
import { Text, TextInput, View, Button } from "react-native";

export default class SettingScreen extends Component {
  state = {};

  static navigationOptions = {
    title: "Settings"
  };

  render() {
    return (
      <View style={{ margin: 10 }}>
        <Text>API Url :</Text>
        <TextInput
          style={{
            height: 35,
            backgroundColor: "white",
            margin: 10,
            borderWidth: 2,
            borderRadius: 5
          }}
        />

        <Button title="Change Url" style={{}} />
      </View>
    );
  }
}
