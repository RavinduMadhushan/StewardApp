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

class ListItemScreen extends Component {
  static navigationOptions = {
    title: "Item List"
  };
  state = {};
  render() {
    return <Text>Item List</Text>;
  }
}

export default ListItemScreen;
