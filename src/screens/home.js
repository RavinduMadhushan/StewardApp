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

class HomeScreen extends Component {
  state = {};
  static navigationOptions = {
    title: "Home",
    header: null
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
        <View style={styles.bottomView} />
        <Image
          source={require("../images/Orange_Logo.png")}
          style={{
            width: 80,
            height: 80,
            marginTop: 30
          }}
        />

        <View style={styles.itemx}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("BeginOrder")}
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
                <Text style={styles.sw}>Begin Order</Text>
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
                  width: 140,
                  height: 140,
                  marginTop: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative"
                }}
                source={require("../images/Rectangle5.png")}
              >
                <Text style={styles.sw}>Order List</Text>
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
                <Text style={styles.sw}>Item List</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("Order")}
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
                <Text style={styles.sw}>Reports</Text>
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
    backgroundColor: "#FF9800",
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
    top: "30%"
  },
  itemy: {
    width: "75%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    top: "53%"
  },
  sw: {
    color: "white",
    position: "absolute",
    fontWeight: "bold",
    bottom: 19,
    fontSize: 18
  }
});

export default HomeScreen;
