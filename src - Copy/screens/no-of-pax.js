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

class NoOfPaxScreen extends Component {
  state = {};
  static navigationOptions = {
    title: "No of Pax",
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
        <View
          style={{
            paddingTop: 100,
            flex: 1,
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <TextInput
            placeholder="No of Pax"
            placeholderTextColor="#ADD8E6"
            textContentType="telephoneNumber"
            style={{
              height: 50,
              width: 280,
              backgroundColor: "white",
              fontSize: 15,
              paddingLeft: 20
            }}
          />
          <TouchableHighlight
            style={styles.submit}
            onPress={() => this.props.navigation.navigate("Categories")}
            underlayColor="#fff"
          >
            <Text style={styles.submitText}>Continue</Text>
          </TouchableHighlight>
        </View>
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

export default NoOfPaxScreen;
