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

class DineInScreen extends Component {
  state = {};

  static navigationOptions = {
    title: "TABLES ",
    headerTintColor: "white",
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
            onPress={() => this.props.navigation.navigate("Customer")}
          >
            <View style={styles.container}>
              <ImageBackground
                style={{
                  width: 80,
                  height: 80,
                  marginTop: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative"
                }}
                source={require("../images/Rectangle_1473.png")}
              >
                <Image
                  source={require("../images/1.png")}
                  style={{
                    width: 10,
                    height: 20,
                    marginTop: 40,
                    marginLeft: 50
                  }}
                />
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("Customer")}
          >
            <View style={styles.container}>
              <ImageBackground
                style={{
                  width: 80,
                  height: 80,
                  marginTop: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative"
                }}
                source={require("../images/Rectangle_1473.png")}
              >
                <Image
                  source={require("../images/2.png")}
                  style={{
                    width: 10,
                    height: 20,
                    marginTop: 40,
                    marginLeft: 50
                  }}
                />
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("Customer")}
          >
            <View style={styles.container}>
              <ImageBackground
                style={{
                  width: 80,
                  height: 80,
                  marginTop: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative"
                }}
                source={require("../images/Rectangle_1473.png")}
              >
                <Image
                  source={require("../images/3.png")}
                  style={{
                    width: 10,
                    height: 20,
                    marginTop: 40,
                    marginLeft: 50
                  }}
                />
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.itemy}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("Customer")}
          >
            <View style={styles.container}>
              <ImageBackground
                style={{
                  width: 80,
                  height: 80,
                  marginTop: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative"
                }}
                source={require("../images/Rectangle_1473.png")}
              >
                <Image
                  source={require("../images/4.png")}
                  style={{
                    width: 10,
                    height: 20,
                    marginTop: 40,
                    marginLeft: 50
                  }}
                />
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("Customer")}
          >
            <View style={styles.container}>
              <ImageBackground
                style={{
                  width: 80,
                  height: 80,
                  marginTop: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative"
                }}
                source={require("../images/Rectangle_1473.png")}
              >
                <Image
                  source={require("../images/5.png")}
                  style={{
                    width: 10,
                    height: 20,
                    marginTop: 40,
                    marginLeft: 50
                  }}
                />
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("Customer")}
          >
            <View style={styles.container}>
              <ImageBackground
                style={{
                  width: 80,
                  height: 80,
                  marginTop: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative"
                }}
                source={require("../images/Rectangle_1473.png")}
              >
                <Image
                  source={require("../images/6.png")}
                  style={{
                    width: 10,
                    height: 20,
                    marginTop: 40,
                    marginLeft: 50
                  }}
                />
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
    width: "85%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    top: "5%"
  },
  itemy: {
    width: "85%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    top: "25%"
  },
  sw: {
    color: "white",
    position: "absolute",
    fontWeight: "bold",
    bottom: 19,
    fontSize: 18
  }
});

export default DineInScreen;
