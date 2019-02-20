import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
  Image,
  StyleSheet,
  ScrollView,
  Picker,
  TextInput,
  AsyncStorage
} from "react-native";

class ItemScreen extends Component {
  state = {
    size: "r",
    item: {},
    amount: 0,
    price: "",
    total: "",
    note: ""
  };
  static navigationOptions = {
    title: "Order",
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

  componentDidMount() {
    try {
      const { navigation } = this.props;
      const pax = navigation.getParam("pax", "some default value");
      const dm = navigation.getParam("dm", "some default value");
      const table = navigation.getParam("table", "some default value");
      const phn = navigation.getParam("phn", "some default value");
      const name = navigation.getParam("name", "some default value");
      const address = navigation.getParam("address", "some default value");
      const roomno = navigation.getParam("roomno", "some default value");
      const item = JSON.parse(navigation.getParam("item", "null"));
      //alert(JSON.stringify(item));
      this.setState({
        item: item,
        price: item.dblRegPrice,
        amount: 1,
        total: item.dblRegPrice
      });
      /* this.props.navigation.navigate("ListItem", {
          pax: pax,
          dm: dm,
          table: table,
          phn: phn,
          name: name,
          address: address,
          roomno: roomno,
          pax: pax,
          type: type
        }); */
    } catch (error) {
      alert(error);
    }
  }

  onPlusClick = () => {
    let amount = parseInt(this.state.amount);
    amount++;
    let price = parseInt(this.state.price) * amount;
    this.setState({ amount: amount, total: price });
  };

  onMinusClick = () => {
    let amount = parseInt(this.state.amount);
    if (amount == 0) return;
    amount--;
    let price = parseInt(this.state.price) * amount;
    this.setState({ amount: amount, total: price });
  };

  addOrder = async () => {
    const { navigation } = this.props;
    const start = navigation.getParam("start", "some default value");
    const pax = navigation.getParam("pax", "some default value");
    const dm = navigation.getParam("dm", "some default value");
    const table = navigation.getParam("table", "some default value");
    const phn = navigation.getParam("phn", "some default value");
    const name = navigation.getParam("name", "some default value");
    const address = navigation.getParam("address", "some default value");
    const roomno = navigation.getParam("roomno", "some default value");
    const type = navigation.getParam("type", "some default value");
    try {
      const value = await AsyncStorage.getItem("currentorder");
      if (value == null) {
        let currentorder = {
          start: start,
          end: Date.now(),
          phn: phn,
          name: name,
          address: address,
          dm: dm,
          table: table,
          roomno: roomno,
          pax: pax,
          items: [
            {
              itemcode: this.state.item.ItemNo,
              amount: this.state.amount,
              size: this.state.size,
              note: this.state.note,
              price: this.state.price,
              name: this.state.item.ItemName
            }
          ]
        };
        this._storeData("currentorder", JSON.stringify(currentorder));
        alert("Items successfully added to the order.");
        this.props.navigation.navigate("ListItem", {
          pax: pax,
          dm: dm,
          table: table,
          phn: phn,
          name: name,
          address: address,
          roomno: roomno,
          pax: pax,
          type: type,
          start: start
        });
      } else {
        let currentorders = JSON.parse(value);
        alert(currentorders.items.length);
        let items = currentorders.items;
        items.push({
          itemcode: this.state.item.ItemNo,
          amount: this.state.amount,
          size: this.state.size,
          note: this.state.note,
          price: this.state.price,
          name: this.state.item.ItemName
        });
        this._storeData("currentorder", JSON.stringify(currentorders));
      }
    } catch (error) {
      alert(error);
    }
  };

  _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      alert(error);
    }
  };

  viewOrder = () => {
    this._retrieveData();
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("currentorder");
      if (value !== null) {
        this.props.navigation.navigate("CurrentOrder");
      } else {
        alert(
          "No previous items in the order. please add items to view order."
        );
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
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View
            style={{
              backgroundColor: "rgba(52, 52, 52, 0.3)"
            }}
          >
            <Text
              style={{
                color: "white",
                paddingTop: 20,
                fontSize: 30,
                paddingLeft: 5,
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              {this.state.item.ItemName}
            </Text>
            <Text
              style={{
                color: "white",
                paddingTop: 11,
                fontSize: 22,
                paddingLeft: 10,
                paddingRight: 10,
                textAlign: "center",
                paddingBottom: 10
              }}
            >
              {this.state.item.Description}
            </Text>
          </View>
          <ScrollView>
            <View
              style={{
                flex: 1,
                flexDirection: "column"
              }}
            >
              <View style={{ flexDirection: "column" }}>
                <View
                  style={{
                    height: 75,
                    borderColor: "grey",
                    borderWidth: 1,
                    flexDirection: "row",
                    opacity: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.8)"
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Picker
                      selectedValue={this.state.size}
                      style={{ height: 50, width: 130 }}
                      itemStyle={{ color: "blue" }}
                      onValueChange={(itemValue, itemIndex) => {
                        this.setState({ size: itemValue });
                        if (itemValue === "r") {
                          let amount = parseInt(this.state.amount);
                          let price =
                            parseInt(this.state.item.dblRegPrice) * amount;
                          this.setState({
                            price: this.state.item.dblRegPrice,
                            total: price
                          });
                        } else if (itemValue === "l") {
                          let amount = parseInt(this.state.amount);
                          let price =
                            parseInt(this.state.item.dblLargePrice) * amount;
                          this.setState({
                            price: this.state.item.dblLargePrice,
                            total: price
                          });
                        } else if (itemValue === "s") {
                          let amount = parseInt(this.state.amount);
                          let price =
                            parseInt(this.state.item.dblSmallPrice) * amount;
                          this.setState({
                            price: this.state.item.dblSmallPrice,
                            total: price
                          });
                        }
                      }}
                    >
                      <Picker.Item label="Small" value="s" />
                      <Picker.Item label="Regular" value="r" />
                      <Picker.Item label="Large" value="l" />
                    </Picker>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      justifyContent: "center"
                    }}
                  >
                    <View
                      style={{ flex: 1, flexDirection: "row", marginTop: 20 }}
                    >
                      <TouchableHighlight
                        onPress={this.onPlusClick}
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
                        <Text style={{ fontSize: 20, paddingLeft: 4 }}>
                          {this.state.amount}
                        </Text>
                      </View>
                      <TouchableHighlight
                        style={{ paddingTop: 5 }}
                        onPress={this.onMinusClick}
                      >
                        <Image
                          style={{ width: 20, height: 20 }}
                          source={require("../images/minus.png")}
                        />
                      </TouchableHighlight>
                    </View>
                  </View>
                  <TouchableHighlight
                    style={{ paddingRight: 15, paddingTop: 22 }}
                  >
                    <Text style={{ fontSize: 20 }}>{this.state.price}$</Text>
                  </TouchableHighlight>
                </View>
                <View
                  style={{
                    height: 35,
                    borderColor: "grey",
                    borderWidth: 1,
                    flexDirection: "row",
                    opacity: 1,
                    backgroundColor: "rgba(255, 255,255, 0.8)"
                  }}
                >
                  <View style={{ flex: 1, flexDirection: "row" }} />
                  <View style={{ flex: 1 }} />
                  <View>
                    <Text
                      style={{
                        color: "blue",
                        fontSize: 20,
                        paddingTop: 3,
                        paddingRight: 16
                      }}
                    >
                      {this.state.total}$
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(52, 52, 52, 0.3)",
                  padding: 10
                }}
              >
                <Text style={{ fontSize: 15, color: "white", paddingLeft: 15 }}>
                  Notes
                </Text>
                <TextInput
                  editable={true}
                  maxLength={40}
                  style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    padding: 15,
                    height: 50,
                    margin: 15
                  }}
                  onChangeText={note => this.setState({ note })}
                  value={this.state.note}
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderColor: "grey",
            borderWidth: 1,
            backgroundColor: "rgba(52, 52, 52, 0.8)"
          }}
        >
          <TouchableHighlight
            style={styles.search}
            onPress={this.viewOrder}
            underlayColor="#fff"
          >
            <Text style={styles.submitText}>View Order</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.search}
            onPress={this.addOrder}
            underlayColor="#fff"
          >
            <Text style={styles.submitText}>Add to Order</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    margin: 15,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#ff9800",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: "45%",
    height: 50,
    flex: 1
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
    paddingTop: 5,
    fontSize: 18
  }
});

export default ItemScreen;
