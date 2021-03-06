import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage
} from "react-native";

class DineInScreen extends Component {
  state = {
    url: "",
    table: []
  };

  componentDidMount = async () => {
    //this.retrieveData();
    this.getTables();
    const dm = this.props.navigation.getParam("dm", "null");
    const start = this.props.navigation.getParam("start", "null");
    this.setState({ dm: dm, start: start });
  };

  _keyExtractor = (item, index) => item.TableNo;

  getTables = async () => {
    this.setState({ loading: true });
    const url = await AsyncStorage.getItem("url");
    //alert(url + "tables.aspx");
    fetch(url + "tables.aspx")
      .then(res => res.json())
      .then(res => {
        const response = JSON.stringify(res);
        const object = JSON.parse(response);
        // var sh = object.SyncData[0].EntityData;
        // sh.info.reverse();
        // alert(sh);
        this.setState({ table: object.SyncData[0].EntityData });
        this.setState({ loading: false });
      })
      .catch(err => {
        alert(err);
        this.setState({ loading: false });
      });
  };

  reverseArr = input => {
    var ret = new Array();
    for (var i = input.length - 1; i >= 0; i--) {
      ret.push(input[i]);
    }
    return ret;
  };

  static navigationOptions = {
    title: "TABLES ",
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

  formatData = (data, numColumns) => {
    // this.reverseArr(JSON.stringify(data));
    data = data.slice().reverse();

    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
    // this.reverseArr(data);
    // alert(JSON.stringify(data));

    return data;
  };

  numColumns = 3;

  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return (
        <ImageBackground
          source={require("../images/BG.png")}
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            margin: 50
          }}
        >
          <View style={[styles.item, styles.itemInvisible]} />
        </ImageBackground>
      );
    } else {
      if (item.isOccupied == true) {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              this.props.navigation.navigate("Categories", {
                dm: this.state.dm,
                table: item.TableNo,
                start: this.state.start,
                phn: "0000",
                name: "no-name",
                address: "no-address",
                roomno: 0,
                pax: 0
              })
            }
          >
            <ImageBackground
              style={{
                width: 90,
                height: 90,
                marginTop: 0,
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                margin: 10
              }}
              source={require("../images/Rectangle_1474.png")}
            >
              <View style={styles.item}>
                <Text style={styles.itemText}>{item.TableNo}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        );
      } else {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              this.props.navigation.navigate("Customer", {
                dm: this.state.dm,
                table: item.TableNo,
                start: this.state.start,
                roomno: 0
              })
            }
          >
            <ImageBackground
              style={{
                width: 90,
                height: 90,
                marginTop: 0,
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                margin: 10
              }}
              source={require("../images/Rectangle_1473.png")}
            >
              <View style={styles.item}>
                <Text style={styles.itemText}>{item.TableNo}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        );
      }
    }
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
          <View style={[styles.containerss, styles.horizontal]}>
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
          height: "100%",
          flex: 1,
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <View>
          <FlatList
            data={this.formatData(this.state.table, 3)}
            style={styles.container}
            renderItem={this.renderItem}
            numColumns={this.numColumns}
            keyExtractor={this._keyExtractor}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "transparent"
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 20
  },
  itemInvisible: {
    backgroundColor: "transparent"
  },
  itemText: {
    color: "#fff"
  },
  containerss: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default DineInScreen;
