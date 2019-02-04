/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/login";
import SettingsScreen from "./src/screens/settings";
import SyncScreen from "./src/screens/sync";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import SplashScreen from "react-native-splash-screen";
import HomeScreen from "./src/screens/home";
import BeginOrderScreen from "./src/screens/begin_order";
import ReportScreen from "./src/screens/reports";
import OrderListScreen from "./src/screens/order_list";
import ListItemScreen from "./src/screens/list_item";

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return <MainNavigator />;
  }
}

const MainNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Settings: SettingsScreen,
    Sync: SyncScreen,
    Home: HomeScreen,
    BeginOrder: BeginOrderScreen,
    Report: ReportScreen,
    OrderList: OrderListScreen,
    ListItem: ListItemScreen
  },
  {
    initialRouteName: "Login"
  }
);
