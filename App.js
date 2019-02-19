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
import CustomerScreen from "./src/screens/customer";
import NoOfPaxScreen from "./src/screens/no-of-pax";
import CategoriesScreen from "./src/screens/categories";
import DineInScreen from "./src/screens/dine_in";
import DinnerScreen from "./src/screens/dinner";
import CurrentOrderScreen from "./src/screens/currentorder";
import CompleteOrderScreen from "./src/screens/complete_order";
import ItemScreen from "./src/screens/item";

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
    ListItem: ListItemScreen,
    Customer: CustomerScreen,
    NoOfPax: NoOfPaxScreen,
    Categories: CategoriesScreen,
    Dine: DineInScreen,
    Dinner: DinnerScreen,
    Customer: CustomerScreen,
    CurrentOrder: CurrentOrderScreen,
    CompleteOrder: CompleteOrderScreen,
    Categories: CategoriesScreen,
    Item: ItemScreen
  },
  {
    initialRouteName: "Login"
  }
);
