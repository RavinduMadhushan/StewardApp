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
<<<<<<< HEAD
    title: "Main Categories",
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
=======
    title: "Main Categories"
>>>>>>> 5d2c0a1bdc56bc6b0119b2a0d5145719c24b0adb
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
<<<<<<< HEAD
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("Dinner")}
          >
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
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("Dinner")}
          >
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
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("Dinner")}
          >
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
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("Dinner")}
          >
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
          </TouchableOpacity>
=======
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
>>>>>>> 5d2c0a1bdc56bc6b0119b2a0d5145719c24b0adb
        </View>
      </ImageBackground>
    );
  }
}

export default CategoriesScreen;
