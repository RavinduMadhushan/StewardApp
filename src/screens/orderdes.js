import React, { Component } from "react";
import moment from "moment";
import {
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
  Image,
  StyleSheet,
  ScrollView,
  AsyncStorage,
  Modal
} from "react-native";

class OrderDesScreen extends Component {
  state = {
    items: [],
    total: "",
    no: "",
    visible: false
  };
  static navigationOptions = {
    title: "Order Desciption",
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
  showModal = async () => {
    try {
      const value = await AsyncStorage.getItem("OrderList");
      if (value !== null) {
        //alert(value);
        this.setState({ visible: true });
      }
    } catch (error) {
      alert(error);
    }
  };

  closeModal = () => {
    this.setState({ visible: false });
  };

  getTotal = () => {
    let total = 0;
    for (let i = 0; i < this.state.items.length; i++) {
      total +=
        parseInt(this.state.items[i].price) *
        parseInt(this.state.items[i].amount);
    }
    return total;
  };

  getSize = size => {
    if (size == "r") {
      return "Regular";
    } else if (size == "l") {
      return "Large";
    } else if (size == "s") {
      return "Small";
    }
  };

  componentDidMount() {
    //this._retrieveData();

    const order = this.props.navigation.getParam("order");
    //alert(JSON.stringify(order.data.items));
    const items = order.data.items;
    const no = order.no;
    this.setState({ items: items, no: no });
    //alert(JSON.stringify(order));
  }
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("currentorder");
      if (value !== null) {
        let data = JSON.parse(value);
        let items = data.items;
        this.setState({ items });
      }
    } catch (error) {
      alert(error);
    }
  };

  onDelete = async item => {
    try {
      const value = await AsyncStorage.getItem("currentorder");
      if (value !== null) {
        let data = JSON.parse(value);
        let items = data.items;
        let index = this.state.items.indexOf(item);

        items.splice(index, 1);
        data.items = items;
        this._storeData("currentorder", JSON.stringify(data));
        this._retrieveData();
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

  complete = () => {
    this._retrievec();
  };

  _retrievec = async () => {
    try {
      const value = await AsyncStorage.getItem("currentorder");
      const poscode = await AsyncStorage.getItem("poscode");
      const username = await AsyncStorage.getItem("uname");
      const upin = JSON.parse(username);

      const pos = poscode;
      //alert(pos);
      const data = JSON.parse(value);

      // const sdate = new Date(data.start);
      // let smonth = sdate.getMonth();
      // let sday = sdate.getDate();
      // let skay = sdate.toLocaleTimeString();
      // let syear = sdate.getFullYear();

      let date = moment().format("YYYY-MM-DD h:mm:ss a");

      // let month = date.getMonth();
      // let day = date.getDate();
      // let kay = date.toLocaleTimeString();
      // let year = date.getFullYear();
      // console.log(year + "-" + month + "-" + day + " " + kay);
      const items = data.items;
      const newitems = [];
      for (let i = 0; i < items.length; i++) {
        newitems.push({
          ItemCode: items[i].itemcode,
          Qty: items[i].amount,
          Size: this.getSize(items[i].size),
          Notes: items[i].note
        });
      }

      if (value !== null) {
        const k = {
          OrderHeader: [
            {
              POSCenterCode: pos,
              UserPIN: upin.PIN,
              OrderStartAt: data.start,
              OrderEndAt: date,
              PhoneNo: data.phn,
              Name: data.name,
              Address: data.address,
              DeliveryMtd: data.dm,
              TableNo: data.table,
              RoomNo: data.roomno,
              NoOfPax: data.pax,
              ItemDtl: newitems
            }
          ]
        };
        // await alert(JSON.stringify(k));
        const url = await AsyncStorage.getItem("url");
        fetch(url + "GetOrder.aspx", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(k)
        })
          .then(res => res.json())
          .then(res => {
            let result = res;
            AsyncStorage.removeItem("currentorder");
            this.saveOrder(k.OrderHeader[0], result.Order.OrderNo);
            this.props.navigation.navigate("Home");
            //alert(JSON.stringify(res.));
          })
          .catch(err => alert(err));
      }
    } catch (error) {
      alert(error);
    }
  };

  storeOrders = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      alert(error);
    }
  };

  saveOrder = async (order, no) => {
    try {
      //alert(no);
      const value = await AsyncStorage.getItem("orders");
      const user = await AsyncStorage.getItem("uname");
      const username = JSON.parse(user).UserName;
      //alert(username);
      if (value !== null) {
        let neworder = {
          no: no,
          order: order,
          name: username
        };
        let orders = JSON.parse(value);
        orders.push(neworder);
        //alert(JSON.stringify(neworder));
        this.storeOrders("orders", JSON.stringify(orders));
      } else {
        let neworder = {
          no: no,
          order: order,
          name: username
        };
        let orders = [];
        orders.push(neworder);
        this.storeOrders("orders", JSON.stringify(orders));
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.visible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
          }}
          style={{ margin: 20 }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(80,80,80,0.8)"
            }}
          >
            <View
              style={{
                width: 300,
                backgroundColor: "#fff"
              }}
            >
              <Text style={{ margin: 15 }}>Are you sure cancel order?</Text>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 15
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <TouchableHighlight
                    // onPress={this.cancelOrder}
                    style={{
                      backgroundColor: "#68a0cf",
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: "#fff",
                      width: 80
                    }}
                  >
                    <Text style={{ textAlign: "center", fontSize: 18 }}>
                      Yes
                    </Text>
                  </TouchableHighlight>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <TouchableHighlight
                    onPress={this.closeModal}
                    style={{
                      backgroundColor: "#68a0cf",
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: "#fff",
                      width: 80
                    }}
                  >
                    <Text style={{ textAlign: "center", fontSize: 18 }}>
                      No
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View
            style={{
              height: 50,
              backgroundColor: "rgba(255, 255, 255, 0.8)"
            }}
          >
            <Text
              style={{
                color: "black",
                paddingTop: 11,
                fontSize: 22,
                paddingLeft: 5
              }}
            >
              {this.state.no}
            </Text>
          </View>
          <ScrollView>
            <View
              style={{
                flex: 1,
                flexDirection: "column"
              }}
            >
              {this.state.items.map(item => {
                return (
                  <View style={{ flexDirection: "column" }}>
                    <View
                      style={{
                        height: 75,
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
                            fontSize: 24,
                            paddingTop: 10,
                            paddingLeft: 20
                          }}
                        >
                          {item.itemcode}
                        </Text>
                        <Text
                          style={{
                            color: "white",
                            fontSize: 15,
                            paddingTop: 3,
                            paddingLeft: 20
                          }}
                        >
                          {item.name}
                        </Text>
                      </View>
                      <View style={{ flex: 1, flexDirection: "column" }}>
                        <Text
                          style={{
                            color: "yellow",
                            fontSize: 15,
                            paddingTop: 30,
                            paddingLeft: 20
                          }}
                        >
                          {this.getSize(item.size)}
                        </Text>
                      </View>
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
                        <View
                          style={{
                            backgroundColor: "white",
                            width: 30,
                            height: 30,
                            marginLeft: 30,
                            borderRadius: 3,
                            marginRight: 12
                          }}
                        >
                          <Text style={{ fontSize: 20, paddingLeft: 4 }}>
                            {item.amount}
                          </Text>
                        </View>
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
                          {item.price}$
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
                          {parseInt(item.price) * parseInt(item.amount)}$
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}

              <View
                style={{
                  height: 75,
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
                      fontSize: 24,
                      paddingTop: 20,
                      paddingLeft: 60
                    }}
                  >
                    Total
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 20,
                      paddingTop: 20,
                      paddingRight: 16
                    }}
                  >
                    {this.getTotal()}$
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <TouchableHighlight
            style={styles.searchs}
            onPress={this.showModal}
            underlayColor="#fff"
          >
            <Text style={styles.submitText}>Void Order</Text>
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
  },
  searchs: {
    margin: 15,
    marginLeft: "26%",
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#ff9800",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: "45%",
    height: 45
  }
});

export default OrderDesScreen;
