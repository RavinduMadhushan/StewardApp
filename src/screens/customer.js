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

class CustomerScreen extends Component {
  state = {
    phoneno: "",
    name: "",
    address: ""
  };

  componentDidMount() {
    const { navigation } = this.props;
    const dm = navigation.getParam("dm", "some default value");
    const table = navigation.getParam("table", "some default value");
    const start = navigation.getParam("start", "some default value");
    const roomno = navigation.getParam("roomno", "some default value");
    //alert(dm);
    this.setState({ dm: dm, table: table, start: start, roomno: roomno });
  }
  static navigationOptions = {
    title: "Customer",
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
            keyboardType="numeric"
            placeholder="Phone no"
            placeholderTextColor="#ADD8E6"
            textContentType="telephoneNumber"
            style={{
              height: 50,
              width: 320,
              backgroundColor: "white",
              fontSize: 15,
              paddingLeft: 10
            }}
            onChangeText={phoneno => this.setState({ phoneno })}
            value={this.state.phoneno}
            autoFocus={true}
          />
          <TextInput
            placeholder="Name"
            placeholderTextColor="#ADD8E6"
            style={{
              width: 320,
              backgroundColor: "white",
              fontSize: 15,
              paddingLeft: 10,
              marginTop: 10,
              paddingTop: 10
            }}
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
          <TextInput
            placeholder="Address"
            placeholderTextColor="#ADD8E6"
            multiline={true}
            numberOfLines={4}
            style={{
              height: 100,
              width: 320,
              backgroundColor: "white",
              fontSize: 15,
              paddingLeft: 10,
              marginTop: 10
            }}
            onChangeText={address => this.setState({ address })}
            value={this.state.address}
          />
        </View>
        <TouchableHighlight
          style={styles.search}
          onPress={() =>
            this.props.navigation.navigate("NoOfPax", {
              dm: this.state.dm,
              table: this.state.table,
              start: this.state.start,
              name: this.state.name,
              phn: this.state.phoneno,
              address: this.state.address,
              roomno: this.state.roomno
            })
          }
          underlayColor="#fff"
        >
          <Text style={styles.submitText}>Continue Order</Text>
        </TouchableHighlight>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
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
    backgroundColor: "#ff9800",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: 320,
    height: 50
  },
  search: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 15,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#ff9800",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: 320,
    height: 50
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
    paddingTop: 5,
    fontSize: 18
  }
});

export default CustomerScreen;
