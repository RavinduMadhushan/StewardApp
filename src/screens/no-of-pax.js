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
  state = {
    text: ""
  };
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

  onSubmit = () => {
    try {
      const { navigation } = this.props;
      const pax = parseInt(this.state.text);
      if (pax == NaN) {
        return alert("Please enter a correct pax");
      }
      const dm = navigation.getParam("dm", "some default value");
      const table = navigation.getParam("table", "some default value");
      const phn = navigation.getParam("phn", "some default value");
      const name = navigation.getParam("name", "some default value");
      const address = navigation.getParam("address", "some default value");
      const roomno = navigation.getParam("roomno", "some default value");
      const start = navigation.getParam("start", "some default value");
      this.props.navigation.navigate("Categories", {
        pax: pax,
        dm: dm,
        table: table,
        phn: phn,
        name: name,
        address: address,
        roomno: roomno,
        start: start
      });
    } catch (error) {
      alert("Please enter a valid pax amount.");
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
            keyboardType="numeric"
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
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <TouchableHighlight
            style={styles.submit}
            onPress={this.onSubmit}
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
