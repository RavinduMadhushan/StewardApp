import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Text,
  ImageBackground,
  Button
} from "react-native";

class OrderScreen extends Component {
  state = {};
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
        <View
          style={{ flexDirection: "row", backgroundColor: "white", width: 320 }}
        >
          <TextInput style={{ height: 40, width: 260 }} />
          <TouchableHighlight title="Press" style={{ alignSelf: "flex-end" }}>
            <Text>Press</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "white",
    width: 300
  },
  searchIcon: {
    padding: 10,
    width: 20,
    height: 20
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242"
  }
});

export default OrderScreen;
