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

class BeginOrderScreen extends Component {
  state = {};

  static navigationOptions = {
    title: "Delivery Method ",
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
        <View style={styles.itemx}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("Dine")}
          >
            <View style={styles.container}>
              <ImageBackground
                style={{
                  width: 140,
                  height: 140,
                  marginTop: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative"
                }}
                source={require("../images/Rectangle4.png")}
              >
                <Text style={styles.sw}>DINE-IN</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("OrderList")}
          >
            <View style={styles.container}>
              <ImageBackground
                style={{
                  width: 140,
                  height: 140,
                  marginTop: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative"
                }}
                source={require("../images/Rectangle5.png")}
              >
                <Text style={styles.sw}>DELIVERY</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.itemy}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("ListItem")}
          >
            <View style={styles.container}>
              <ImageBackground
                style={{
                  width: 140,
                  height: 140,
                  marginTop: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative"
                }}
                source={require("../images/Rectangle6.png")}
              >
                <Text style={styles.sw}>TAKE-AWAY</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("Report")}
          >
            <View style={styles.container}>
              <ImageBackground
                style={{
                  width: 140,
                  height: 140,
                  marginTop: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative"
                }}
                source={require("../images/Rectangle7.png")}
              >
                <Text style={styles.sw}>ROOM SERV.</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  bottomView: {
    width: "100%",
    height: 54,
    backgroundColor: "#ff9800",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  itemx: {
    width: "75%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    top: "20%"
  },
  itemy: {
    width: "75%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    top: "45%"
  },
  sw: {
    color: "white",
    position: "absolute",
    fontWeight: "bold",
    bottom: 19,
    fontSize: 18
  }
});

export default BeginOrderScreen;
