import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
  Image,
  StyleSheet,
  ScrollView,
  AsyncStorage
} from "react-native";

class CurrentOrderScreen extends Component {
  state = {
    items: [],
    total: ""
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
    this._retrieveData();
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
              Current Order
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
                      <TouchableHighlight
                        style={{ paddingRight: 15, paddingTop: 22 }}
                        onPress={() => this.onDelete(item)}
                      >
                        <Image
                          style={{ width: 22, height: 22 }}
                          source={require("../images/trash.png")}
                        />
                      </TouchableHighlight>
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
                        <TouchableHighlight
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
                            {item.amount}
                          </Text>
                        </View>
                        <TouchableHighlight style={{ paddingTop: 5 }}>
                          <Image
                            style={{ width: 20, height: 20 }}
                            source={require("../images/minus.png")}
                          />
                        </TouchableHighlight>
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
                    45$
                  </Text>
                </View>
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
            onPress={() => this.props.navigation.navigate("ListItem")}
            underlayColor="#fff"
          >
            <Text style={styles.submitText}>Order More</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.search}
            onPress={() => this.props.navigation.navigate("CompleteOrder")}
            underlayColor="#fff"
          >
            <Text style={styles.submitText}>Complete Order</Text>
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

export default CurrentOrderScreen;
