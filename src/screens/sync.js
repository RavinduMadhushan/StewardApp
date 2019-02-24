import React, { Component } from "react";
import {
  View,
  Image,
  TouchableHighlight,
  Text,
  ImageBackground,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { AsyncStorage } from "react-native";

export default class SyncScreen extends Component {
  state = {
    lastsync: "",
    loading: false,
    itemsLength: "",
    tablesLength: ""
  };

  async componentDidMount() {
    await this.retrieveData();
  }

  retrieveData = async () => {
    try {
      const lastsync = await AsyncStorage.getItem("lastsync");
      const items = await AsyncStorage.getItem("items");
      const tables = await AsyncStorage.getItem("tables");

      if (lastsync !== null) {
        this.setState({
          lastsync: lastsync,
          itemsLength: JSON.parse(items).length,
          tablesLength: JSON.parse(tables).length
        });
        //alert(JSON.stringify(this.state));
      } else {
        this.setState({ lastsync: "no previous records." });
      }
    } catch (error) {
      alert(error);
    }
  };

  storeData = async (key, data) => {
    try {
      await AsyncStorage.setItem(key, data);
    } catch (error) {
      alert("Error : ", key);
    }
  };

  sync = async () => {
    this.setState({ loading: true });
    const url = await AsyncStorage.getItem("url");
    try {
      await fetch(url + "Items.aspx")
        .then(res => res.json())
        .then(res => {
          this.storeData("items", JSON.stringify(res.SyncData[0].EntityData));
          this.parseCatogeries(res.SyncData[0].EntityData);
          fetch(url + "tables.aspx")
            .then(res => res.json())
            .then(res => {
              this.storeData(
                "tables",
                JSON.stringify(res.SyncData[0].EntityData)
              );
              this.storeData("lastsync", res.SyncTime);
              this.setState({ loading: false });
              this.retrieveData();
              alert("Successfully synchronized.");
            });
        })
        .catch(error => {
          this.setState({ loading: false });
          alert(error);
        });
    } catch (error) {
      this.setState({ loading: false });
      alert("Error connecting to local database.");
    }
  };

  static navigationOptions = {
    title: "Sync with Server",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#ff9800"
    },
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
    )
  };

  parseCatogeries = items => {
    const categories = [];
    for (var i = 0; i < items.length; i++) {
      if (!categories.includes(items[i].BaseCat)) {
        categories.push(items[i].BaseCat);
      }
    }
    this.storeData("basecat", JSON.stringify(categories));
  };

  render() {
    if (this.state.loading == true) {
      return (
        <ImageBackground
          source={require("../images/BG.png")}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size={90} color="#ffffff" />
          </View>
        </ImageBackground>
      );
    }
    return (
      <ImageBackground
        source={require("../images/BG.png")}
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              paddingTop: 20,
              color: "white",
              paddingLeft: 10
            }}
          >
            Last synced : {this.state.lastsync}
          </Text>

          <TouchableHighlight
            onPress={() => this.sync()}
            style={{
              marginRight: 40,
              marginLeft: 40,
              marginBottom: 7,
              marginTop: 30,
              paddingTop: 5,
              paddingBottom: 5,
              backgroundColor: "#ff9800",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#fff",
              width: 320,
              height: 50,
              alignSelf: "center"
            }}
            underlayColor="#fff"
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                paddingTop: 5,
                fontSize: 18,
                fontWeight: "bold"
              }}
            >
              Sync
            </Text>
          </TouchableHighlight>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                paddingTop: 20,
                color: "white",
                paddingLeft: 10
              }}
            >
              Items : {this.state.itemsLength}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                paddingTop: 20,
                color: "white",
                paddingLeft: 10
              }}
            >
              Tables : {this.state.tablesLength}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
