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
  TextInput
} from "react-native";

class ItemScreen extends Component {
  state = {
    size: "r"
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
              Current Order
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
              In the following example, the nested title and body text will
              inherit the fontFamily from styles.baseText, but the title
              provides its own additional styles.
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
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ size: itemValue })
                      }
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
                        <Text style={{ fontSize: 20, paddingLeft: 4 }}>1</Text>
                      </View>
                      <TouchableHighlight style={{ paddingTop: 5 }}>
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
                    <Text style={{ fontSize: 20 }}>12$</Text>
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
                      24$
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
            onPress={() => this.props.navigation.navigate("Dinner")}
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

export default ItemScreen;
