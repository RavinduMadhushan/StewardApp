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
  state = {
    orders: []
  };

  componentDidMount = () => {
    this._retrieveData();
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("orders");
      if (value !== null) {
        orders = JSON.parse(value);
        orders.reverse();
        this.setState({ orders });
        //alert(JSON.stringify(orders[2]));
      }
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
          height: "100%"
        }}
      >
        <View
          style={{ flex: 1, flexDirection: "column", alignItems: "stretch" }}
        >
          <ScrollView>
            <View style={{ flexDirection: "column" }}>
              {this.state.orders.map(item => {
                return (
                  <View style={{ flexDirection: "column" }}>
                    <View
                      style={{
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
                          {item.no}
                        </Text>
                        <Text
                          style={{
                            color: "white",
                            fontSize: 18,
                            paddingTop: 1,
                            paddingLeft: 10
                          }}
                        >
                          Table : {item.order.TableNo}
                        </Text>
                        <Text
                          style={{
                            color: "yellow",
                            fontSize: 14,
                            paddingTop: 1,
                            paddingLeft: 10
                          }}
                        >
                          Pax: {item.order.NoOfPax}
                        </Text>
                        <Text
                          style={{
                            color: "yellow",
                            fontSize: 12,
                            paddingTop: 1,
                            paddingLeft: 10,
                            paddingBottom: 8
                          }}
                        >
                          Order time: {item.order.OrderEndAt}
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
                          Steward: {item.name}
                        </Text>
                      </View>
                      <TouchableHighlight
                        style={{ paddingRight: 15, paddingTop: 32 }}
                        onPress={() =>
                          this.props.navigation.navigate("OrderDes", {
                            order: item
                          })
                        }
                      >
                        <Image
                          style={{ width: 20, height: 20 }}
                          source={require("../images/right.png")}
                        />
                      </TouchableHighlight>
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default OrderListScreen;
