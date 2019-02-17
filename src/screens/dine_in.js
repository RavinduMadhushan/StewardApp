import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground
} from "react-native";

class DineInScreen extends Component {
  state = {
    url: "http://195.206.181.226:10399/API/tables.aspx",
    table: []
  };

  componentDidMount = async () => {
    this.getTables();
  };

  getTables = async () => {
    fetch(this.state.url)
      .then(res => res.json())
      .then(res => {
        const response = JSON.stringify(res);
        const object = JSON.parse(response);
        // var sh = object.SyncData[0].EntityData;
        // sh.info.reverse();
        // alert(sh);
        this.setState({ table: object.SyncData[0].EntityData });
      })
      .catch(err => alert(err));
  };

  // reverseArr = input => {
  //   var ret = new Array();
  //   for (var i = input.length - 1; i >= 0; i--) {
  //     ret.push(input[i]);
  //   }
  //   alert(ret);
  // };

  static navigationOptions = {
    title: "TABLES ",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#ff9800"
    }
  };

  formatData = (data, numColumns) => {
    // this.reverseArr(JSON.stringify(data));

    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
    // alert(JSON.stringify(data));
    data = data.reverse();
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
    }
    return (
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
    );
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
        <View>
          <FlatList
            data={this.formatData(this.state.table, 3)}
            style={styles.container}
            renderItem={this.renderItem}
            numColumns={this.numColumns}
            keyExtractor={this.state.table.TableNo}
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
  }
});

export default DineInScreen;
