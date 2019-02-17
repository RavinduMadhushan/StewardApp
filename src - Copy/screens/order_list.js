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

class OrderListScreen extends Component {
  static navigationOptions = {
    title: "Order List",
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
  state = {};
  render() {
    return (
      <ImageBackground
        source={require("../images/BG.png")}
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <View
          style={{ flex: 1, flexDirection: "column", alignItems: "stretch" }}
        >
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              width: 320,
              marginTop: 10,
              height: 40,
              alignSelf: "center",
              marginBottom: 10
            }}
          >
            <TextInput
              style={{
                height: 40,
                flex: 1,
                flexDirection: "row",
                paddingLeft: 20
              }}
              placeholder="Search"
              placeholderTextColor="#ADD8E6"
            />
            <TouchableHighlight
              title="Press"
              style={{ paddingRight: 7, paddingTop: 5 }}
              activeOpacity={0.9}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../images/search.png")}
              />
            </TouchableHighlight>
          </View>
          <ScrollView>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "column" }}>
                <View
                  style={{
                    height: 95,
                    borderColor: "grey",
                    borderWidth: 1,
                    flexDirection: "row",
                    opacity: 1,
                    backgroundColor: "rgba(52, 52, 52, 0.3)"
                  }}
                >
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        paddingTop: 8,
                        paddingLeft: 10
                      }}
                    >
                      1100/07/2145
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 18,
                        paddingTop: 1,
                        paddingLeft: 10
                      }}
                    >
                      Table: 07
                    </Text>
                    <Text
                      style={{
                        color: "yellow",
                        fontSize: 14,
                        paddingTop: 1,
                        paddingLeft: 10
                      }}
                    >
                      Pax: 03
                    </Text>
                    <Text
                      style={{
                        color: "yellow",
                        fontSize: 12,
                        paddingTop: 1,
                        paddingLeft: 10
                      }}
                    >
                      Order time: 12.35 pm
                    </Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text
                      style={{
                        color: "yellow",
                        fontSize: 14,
                        paddingTop: 8,
                        paddingLeft: 1
                      }}
                    >
                      Status: On Preparation
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        paddingTop: 8,
                        paddingLeft: 1
                      }}
                    >
                      Steward: SHANTHA
                    </Text>
                  </View>
                  <TouchableHighlight
                    style={{ paddingRight: 15, paddingTop: 32 }}
                  >
                    <Image
                      style={{ width: 20, height: 20 }}
                      source={require("../images/right.png")}
                    />
                  </TouchableHighlight>
                </View>
                <View
                  style={{
                    height: 35,
                    borderColor: "grey",
                    borderWidth: 1,
                    flexDirection: "row",
                    opacity: 1,
                    backgroundColor: "rgba(244, 197, 66, 0.8)"
                  }}
                >
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <TouchableHighlight
                      style={{ paddingTop: 5, paddingLeft: 20 }}
                    >
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require("../images/plus.png")}
                      />
                    </TouchableHighlight>
                    <View
                      style={{
                        backgroundColor: "white",
                        width: 30,
                        height: 30,
                        marginLeft: 12,
                        borderRadius: 3,
                        marginRight: 12
                      }}
                    >
                      <Text style={{ fontSize: 20, paddingLeft: 4 }}>1</Text>
                    </View>
                    <TouchableHighlight style={{ paddingTop: 5 }}>
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require("../images/minus.png")}
                      />
                    </TouchableHighlight>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        paddingTop: 3,
                        paddingLeft: 20
                      }}
                    >
                      12$
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        paddingTop: 3,
                        paddingRight: 16
                      }}
                    >
                      24$
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "column" }}>
                <View
                  style={{
                    height: 95,
                    borderColor: "grey",
                    borderWidth: 1,
                    flexDirection: "row",
                    opacity: 1,
                    backgroundColor: "rgba(52, 52, 52, 0.3)"
                  }}
                >
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        paddingTop: 8,
                        paddingLeft: 10
                      }}
                    >
                      1100/07/2145
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 18,
                        paddingTop: 1,
                        paddingLeft: 10
                      }}
                    >
                      Table: 07
                    </Text>
                    <Text
                      style={{
                        color: "yellow",
                        fontSize: 14,
                        paddingTop: 1,
                        paddingLeft: 10
                      }}
                    >
                      Pax: 03
                    </Text>
                    <Text
                      style={{
                        color: "yellow",
                        fontSize: 12,
                        paddingTop: 1,
                        paddingLeft: 10
                      }}
                    >
                      Order time: 12.35 pm
                    </Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text
                      style={{
                        color: "yellow",
                        fontSize: 14,
                        paddingTop: 8,
                        paddingLeft: 1
                      }}
                    >
                      Status: On Preparation
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        paddingTop: 8,
                        paddingLeft: 1
                      }}
                    >
                      Steward: SHANTHA
                    </Text>
                  </View>
                  <TouchableHighlight
                    style={{ paddingRight: 15, paddingTop: 32 }}
                  >
                    <Image
                      style={{ width: 20, height: 20 }}
                      source={require("../images/right.png")}
                    />
                  </TouchableHighlight>
                </View>
                <View
                  style={{
                    height: 35,
                    borderColor: "grey",
                    borderWidth: 1,
                    flexDirection: "row",
                    opacity: 1,
                    backgroundColor: "rgba(244, 197, 66, 0.8)"
                  }}
                >
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <TouchableHighlight
                      style={{ paddingTop: 5, paddingLeft: 20 }}
                    >
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require("../images/plus.png")}
                      />
                    </TouchableHighlight>
                    <View
                      style={{
                        backgroundColor: "white",
                        width: 30,
                        height: 30,
                        marginLeft: 12,
                        borderRadius: 3,
                        marginRight: 12
                      }}
                    >
                      <Text style={{ fontSize: 20, paddingLeft: 4 }}>1</Text>
                    </View>
                    <TouchableHighlight style={{ paddingTop: 5 }}>
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require("../images/minus.png")}
                      />
                    </TouchableHighlight>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        paddingTop: 3,
                        paddingLeft: 20
                      }}
                    >
                      12$
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        paddingTop: 3,
                        paddingRight: 16
                      }}
                    >
                      24$
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "column" }}>
                <View
                  style={{
                    height: 95,
                    borderColor: "grey",
                    borderWidth: 1,
                    flexDirection: "row",
                    opacity: 1,
                    backgroundColor: "rgba(52, 52, 52, 0.3)"
                  }}
                >
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        paddingTop: 8,
                        paddingLeft: 10
                      }}
                    >
                      1100/07/2145
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 18,
                        paddingTop: 1,
                        paddingLeft: 10
                      }}
                    >
                      Table: 07
                    </Text>
                    <Text
                      style={{
                        color: "yellow",
                        fontSize: 14,
                        paddingTop: 1,
                        paddingLeft: 10
                      }}
                    >
                      Pax: 03
                    </Text>
                    <Text
                      style={{
                        color: "yellow",
                        fontSize: 12,
                        paddingTop: 1,
                        paddingLeft: 10
                      }}
                    >
                      Order time: 12.35 pm
                    </Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text
                      style={{
                        color: "yellow",
                        fontSize: 14,
                        paddingTop: 8,
                        paddingLeft: 1
                      }}
                    >
                      Status: On Preparation
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        paddingTop: 8,
                        paddingLeft: 1
                      }}
                    >
                      Steward: SHANTHA
                    </Text>
                  </View>
                  <TouchableHighlight
                    style={{ paddingRight: 15, paddingTop: 32 }}
                  >
                    <Image
                      style={{ width: 20, height: 20 }}
                      source={require("../images/right.png")}
                    />
                  </TouchableHighlight>
                </View>
                <View
                  style={{
                    height: 35,
                    borderColor: "grey",
                    borderWidth: 1,
                    flexDirection: "row",
                    opacity: 1,
                    backgroundColor: "rgba(244, 197, 66, 0.8)"
                  }}
                >
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <TouchableHighlight
                      style={{ paddingTop: 5, paddingLeft: 20 }}
                    >
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require("../images/plus.png")}
                      />
                    </TouchableHighlight>
                    <View
                      style={{
                        backgroundColor: "white",
                        width: 30,
                        height: 30,
                        marginLeft: 12,
                        borderRadius: 3,
                        marginRight: 12
                      }}
                    >
                      <Text style={{ fontSize: 20, paddingLeft: 4 }}>1</Text>
                    </View>
                    <TouchableHighlight style={{ paddingTop: 5 }}>
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require("../images/minus.png")}
                      />
                    </TouchableHighlight>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        paddingTop: 3,
                        paddingLeft: 20
                      }}
                    >
                      12$
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        paddingTop: 3,
                        paddingRight: 16
                      }}
                    >
                      24$
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "column" }}>
                <View
                  style={{
                    height: 95,
                    borderColor: "grey",
                    borderWidth: 1,
                    flexDirection: "row",
                    opacity: 1,
                    backgroundColor: "rgba(52, 52, 52, 0.3)"
                  }}
                >
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        paddingTop: 8,
                        paddingLeft: 10
                      }}
                    >
                      1100/07/2145
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 18,
                        paddingTop: 1,
                        paddingLeft: 10
                      }}
                    >
                      Table: 07
                    </Text>
                    <Text
                      style={{
                        color: "yellow",
                        fontSize: 14,
                        paddingTop: 1,
                        paddingLeft: 10
                      }}
                    >
                      Pax: 03
                    </Text>
                    <Text
                      style={{
                        color: "yellow",
                        fontSize: 12,
                        paddingTop: 1,
                        paddingLeft: 10
                      }}
                    >
                      Order time: 12.35 pm
                    </Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text
                      style={{
                        color: "yellow",
                        fontSize: 14,
                        paddingTop: 8,
                        paddingLeft: 1
                      }}
                    >
                      Status: On Preparation
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        paddingTop: 8,
                        paddingLeft: 1
                      }}
                    >
                      Steward: SHANTHA
                    </Text>
                  </View>
                  <TouchableHighlight
                    style={{ paddingRight: 15, paddingTop: 32 }}
                  >
                    <Image
                      style={{ width: 20, height: 20 }}
                      source={require("../images/right.png")}
                    />
                  </TouchableHighlight>
                </View>
                <View
                  style={{
                    height: 35,
                    borderColor: "grey",
                    borderWidth: 1,
                    flexDirection: "row",
                    opacity: 1,
                    backgroundColor: "rgba(244, 197, 66, 0.8)"
                  }}
                >
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <TouchableHighlight
                      style={{ paddingTop: 5, paddingLeft: 20 }}
                    >
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require("../images/plus.png")}
                      />
                    </TouchableHighlight>
                    <View
                      style={{
                        backgroundColor: "white",
                        width: 30,
                        height: 30,
                        marginLeft: 12,
                        borderRadius: 3,
                        marginRight: 12
                      }}
                    >
                      <Text style={{ fontSize: 20, paddingLeft: 4 }}>1</Text>
                    </View>
                    <TouchableHighlight style={{ paddingTop: 5 }}>
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require("../images/minus.png")}
                      />
                    </TouchableHighlight>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        paddingTop: 3,
                        paddingLeft: 20
                      }}
                    >
                      12$
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        paddingTop: 3,
                        paddingRight: 16
                      }}
                    >
                      24$
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default OrderListScreen;
