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
  StatusBar,
  AsyncStorage
} from "react-native";

export default class LoginScreen extends Component {
  state = {
    url: "",
    pin: "",
    users: []
  };

  static navigationOptions = {
    header: null
  };

  componentDidMount = async () => {};

  retrieveData = async () => {
    try {
      const url = await AsyncStorage.getItem("url");
      if (url == null) {
        alert("Please enter the server address before login.");
        return;
      } else {
        this.setState({ url: url + "users.aspx" });
      }
    } catch (error) {
      alert(error);
    }
  };

  getUsers = async () => {
    const url = await AsyncStorage.getItem("url");
    if (url == null) {
      //alert("Please enter the server address before login.");
      return;
    } else {
      this.setState({ url: url + "users.aspx" });
    }
    fetch(this.state.url)
      .then(res => res.json())
      .then(res => {
        const response = JSON.stringify(res);
        const object = JSON.parse(response);
        this.setState({ users: object.SyncData[0].EntityData });
      })
      .catch(err => alert(err));
  };

  storeData = async (key, data) => {
    try {
      await AsyncStorage.setItem(key, data);
    } catch (error) {
      alert("Errorll : ", key);
    }
  };

  login = () => {
    this.getUsers();
    let found = false;
    let user = null;

    for (var i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i].PIN === this.state.pin) {
        user = this.state.users[i];
        this.storeData("uname", JSON.stringify(user));

        found = true;
      } else {
      }
    }
    // _retrieveData = async () => {
    //   try {
    //     const value = await AsyncStorage.getItem("uname");
    //     alert(value);
    //   } catch (error) {
    //     // Error retrieving data
    //   }
    // };

    if (found) {
      // _retrieveData();

      this.props.navigation.navigate("Home");
    } else {
      alert("Wrong pin entered!");
    }
  };

  render() {
    return (
      <ImageBackground
        source={require("../images/img1.png")}
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <StatusBar barStyle="light-content" />
        <Image
          source={require("../images/Orange_Logo.png")}
          style={{
            width: 80,
            height: 80,
            marginTop: 40
          }}
        />
        <Image
          source={require("../images/ENTER_PIN.png")}
          style={{
            marginTop: 20,
            aspectRatio: 1.41,
            marginLeft: 10,
            resizeMode: "contain",
            alignItems: "center",
            marginBottom: -18
          }}
        />
        <TextInput
          secureTextEntry
          keyboardType="numeric"
          style={{
            height: 40,
            width: 180,
            backgroundColor: "white",
            marginBottom: 10
          }}
          onChangeText={pin => this.setState({ pin })}
          value={this.state.pin}
        />
        <TouchableHighlight
          style={styles.submit}
          onPress={() => this.login()}
          underlayColor="#fff"
        >
          <Text style={styles.submitText}>Login</Text>
        </TouchableHighlight>

        <View style={styles.bottomView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("Sync")}
          >
            <Image
              style={{
                width: 45,
                height: 45,
                marginTop: 0,
                marginLeft: 10
              }}
              source={require("../images/Sync.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("Settings")}
          >
            <Image
              style={{
                width: 45,
                height: 45,
                marginTop: 0,
                marginRight: 10
              }}
              source={require("../images/Settings2.png")}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bottomView: {
    width: "100%",
    height: 54,
    backgroundColor: "#ff5722",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: 100
  },
  submitText: {
    color: "#fff",
    textAlign: "center"
  }
});
