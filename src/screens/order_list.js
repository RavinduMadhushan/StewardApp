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
    title: "Order List"
  };
  state = {};
  render() {
    return <Text>Order List</Text>;
  }
}

export default OrderListScreen;
