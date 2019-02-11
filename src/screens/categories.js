import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Image,
  Button,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  StatusBar
} from "react-native";

class CategoriesScreen extends Component {
  state = {};

  static navigationOptions = {
    title: "Main Categories"
  };

  render() {
    return (
      <ImageBackground
        source={require("../images/BG.png")}
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          flexDirection: "column"
        }}
      >
        <View>
          <View style={{ height: 100, borderColor: "grey", borderWidth: 1 }}>
            <Text
              style={{
                textAlign: "right",
                color: "white",
                fontSize: 30,
                paddingTop: 52,
                paddingRight: 10
              }}
            >
              BREAKFAST
            </Text>
          </View>
          <View style={{ height: 100, borderColor: "grey", borderWidth: 1 }}>
            <Text
              style={{
                textAlign: "right",
                color: "white",
                fontSize: 30,
                paddingTop: 52,
                paddingRight: 10
              }}
            >
              LUNCH
            </Text>
          </View>
          <View style={{ height: 100, borderColor: "grey", borderWidth: 1 }}>
            <Text
              style={{
                textAlign: "right",
                color: "white",
                fontSize: 30,
                paddingTop: 52,
                paddingRight: 10
              }}
            >
              DINNER
            </Text>
          </View>
          <View style={{ height: 100, borderColor: "grey", borderWidth: 1 }}>
            <Text
              style={{
                textAlign: "right",
                color: "white",
                fontSize: 30,
                paddingTop: 52,
                paddingRight: 10
              }}
            >
              WINE
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default CategoriesScreen;
