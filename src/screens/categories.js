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
  };

  onSubmit = type => {
    try {
      const { navigation } = this.props;
      const pax = navigation.getParam("pax", "some default value");
      const dm = navigation.getParam("dm", "some default value");
      const table = navigation.getParam("table", "some default value");
      const phn = navigation.getParam("phn", "some default value");
      const name = navigation.getParam("name", "some default value");
      const address = navigation.getParam("address", "some default value");
      const roomno = navigation.getParam("roomno", "some default value");
      const start = navigation.getParam("start", "some default value");
      this.props.navigation.navigate("ListItem", {
        pax: pax,
        dm: dm,
        table: table,
        phn: phn,
        name: name,
        address: address,
        roomno: roomno,
        pax: pax,
        type: type,
        start: start
      });
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
          height: "100%",
          flex: 1,
          flexDirection: "column"
        }}
      >
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.onSubmit("Breakfast")}
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
            onPress={() => this.onSubmit("Lunch")}
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
            onPress={() => this.onSubmit("Dinner")}
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
            onPress={() => this.onSubmit("Wine")}
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
        </View>
      </ImageBackground>
    );
  }
}

export default CategoriesScreen;
