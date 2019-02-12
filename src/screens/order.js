import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Text,
  ImageBackground,
  Button,
  Image,
  ScrollView
} from "react-native";

class OrderScreen extends Component {
  state = {
    appatizer: false,
    soup: false,
    salad: false
  };

  onAppatizerClick = () => {
    const status = this.state.appatizer;
    this.setState({ appatizer: !status });
    //alert(this.state.appatizer);
  };

  onSoupClick = () => {
    const status = this.state.soup;
    this.setState({ soup: !status });
    //alert(JSON.stringify(this.state));
  };

  onSaladClick = () => {
    const status = this.state.salad;
    this.setState({ salad: !status });
    //alert(JSON.stringify(this.state));
  };

  render() {
    const appatizerIcon = this.state.appatizer
      ? require("../images/up.png")
      : require("../images/down.png");

    const soupIcon = this.state.soup
      ? require("../images/up.png")
      : require("../images/down.png");

    const saladIcon = this.state.salad
      ? require("../images/up.png")
      : require("../images/down.png");
    return (
      <ImageBackground
        source={require("../images/BG.png")}
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <View
          style={{ flex: 1, flexDirection: "column", alignItems: "stretch" }}
        >
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              width: 320,
              marginTop: 10,
              height: 40,
              alignSelf: "center",
              marginBottom: 10
            }}
          >
            <TextInput
              style={{
                height: 40,
                flex: 1,
                flexDirection: "row",
                paddingLeft: 20
              }}
              placeholder="Search"
              placeholderTextColor="#ADD8E6"
            />
            <TouchableHighlight
              title="Press"
              style={{ paddingRight: 7, paddingTop: 5 }}
              activeOpacity={0.9}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../images/search.png")}
              />
            </TouchableHighlight>
          </View>
          <ScrollView>
            <View
              style={{
                height: 100,
                borderColor: "grey",
                borderWidth: 1,
                flexDirection: "row",
                opacity: 1,
                backgroundColor: "rgba(52, 52, 52, 0.3)"
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 30,
                  paddingTop: 52,
                  paddingLeft: 10,
                  flex: 1,
                  flexDirection: "row"
                }}
              >
                APPATIZER
              </Text>
              <TouchableHighlight
                style={{ paddingRight: 7, paddingTop: 58 }}
                onPress={this.onAppatizerClick}
              >
                <Image
                  style={{ width: 30, height: 30 }}
                  source={appatizerIcon}
                />
              </TouchableHighlight>
            </View>
            {this.state.appatizer && (
              <View>
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
                        fontSize: 22,
                        paddingTop: 10,
                        paddingLeft: 40
                      }}
                    >
                      14550
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        paddingTop: 3,
                        paddingLeft: 40
                      }}
                    >
                      Tomato Bazil Soup
                    </Text>
                  </View>

                  <TouchableHighlight
                    title="Press"
                    style={{ paddingRight: 7, paddingTop: 20 }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../images/right.png")}
                    />
                  </TouchableHighlight>
                </View>
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
                        fontSize: 22,
                        paddingTop: 10,
                        paddingLeft: 40
                      }}
                    >
                      14550
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        paddingTop: 3,
                        paddingLeft: 40
                      }}
                    >
                      Tomato Bazil Soup
                    </Text>
                  </View>

                  <TouchableHighlight
                    title="Press"
                    style={{ paddingRight: 7, paddingTop: 20 }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../images/right.png")}
                    />
                  </TouchableHighlight>
                </View>
              </View>
            )}

            <View
              style={{
                height: 100,
                borderColor: "grey",
                borderWidth: 1,
                flexDirection: "row",
                opacity: 1,
                backgroundColor: "rgba(52, 52, 52, 0.3)"
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 30,
                  paddingTop: 52,
                  paddingLeft: 10,
                  flex: 1,
                  flexDirection: "row"
                }}
              >
                SOUP
              </Text>
              <TouchableHighlight
                style={{ paddingRight: 7, paddingTop: 58 }}
                onPress={this.onSoupClick}
              >
                <Image style={{ width: 30, height: 30 }} source={soupIcon} />
              </TouchableHighlight>
            </View>
            {this.state.soup && (
              <View>
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
                        fontSize: 22,
                        paddingTop: 10,
                        paddingLeft: 40
                      }}
                    >
                      14550
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        paddingTop: 3,
                        paddingLeft: 40
                      }}
                    >
                      Tomato Bazil Soup
                    </Text>
                  </View>

                  <TouchableHighlight
                    title="Press"
                    style={{ paddingRight: 7, paddingTop: 20 }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../images/right.png")}
                    />
                  </TouchableHighlight>
                </View>
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
                        fontSize: 22,
                        paddingTop: 10,
                        paddingLeft: 40
                      }}
                    >
                      14550
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        paddingTop: 3,
                        paddingLeft: 40
                      }}
                    >
                      Tomato Bazil Soup
                    </Text>
                  </View>

                  <TouchableHighlight
                    title="Press"
                    style={{ paddingRight: 7, paddingTop: 20 }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../images/right.png")}
                    />
                  </TouchableHighlight>
                </View>
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
                        fontSize: 22,
                        paddingTop: 10,
                        paddingLeft: 40
                      }}
                    >
                      14550
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        paddingTop: 3,
                        paddingLeft: 40
                      }}
                    >
                      Tomato Bazil Soup
                    </Text>
                  </View>

                  <TouchableHighlight
                    title="Press"
                    style={{ paddingRight: 7, paddingTop: 20 }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../images/right.png")}
                    />
                  </TouchableHighlight>
                </View>
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
                        fontSize: 22,
                        paddingTop: 10,
                        paddingLeft: 40
                      }}
                    >
                      14550
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        paddingTop: 3,
                        paddingLeft: 40
                      }}
                    >
                      Tomato Bazil Soup
                    </Text>
                  </View>

                  <TouchableHighlight
                    title="Press"
                    style={{ paddingRight: 7, paddingTop: 20 }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../images/right.png")}
                    />
                  </TouchableHighlight>
                </View>
              </View>
            )}

            <View
              style={{
                height: 100,
                borderColor: "grey",
                borderWidth: 1,
                flexDirection: "row",
                opacity: 1,
                backgroundColor: "rgba(52, 52, 52, 0.3)"
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 30,
                  paddingTop: 52,
                  paddingLeft: 10,
                  flex: 1,
                  flexDirection: "row"
                }}
              >
                SALAD
              </Text>
              <TouchableHighlight
                style={{ paddingRight: 7, paddingTop: 58 }}
                onPress={this.onSaladClick}
              >
                <Image style={{ width: 30, height: 30 }} source={saladIcon} />
              </TouchableHighlight>
            </View>
            {this.state.salad && (
              <View>
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
                        fontSize: 22,
                        paddingTop: 10,
                        paddingLeft: 40
                      }}
                    >
                      14550
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        paddingTop: 3,
                        paddingLeft: 40
                      }}
                    >
                      Tomato Bazil Soup
                    </Text>
                  </View>

                  <TouchableHighlight
                    title="Press"
                    style={{ paddingRight: 7, paddingTop: 20 }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../images/right.png")}
                    />
                  </TouchableHighlight>
                </View>
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
                        fontSize: 22,
                        paddingTop: 10,
                        paddingLeft: 40
                      }}
                    >
                      14550
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        paddingTop: 3,
                        paddingLeft: 40
                      }}
                    >
                      Tomato Bazil Soup
                    </Text>
                  </View>

                  <TouchableHighlight
                    title="Press"
                    style={{ paddingRight: 7, paddingTop: 20 }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../images/right.png")}
                    />
                  </TouchableHighlight>
                </View>
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
                        fontSize: 22,
                        paddingTop: 10,
                        paddingLeft: 40
                      }}
                    >
                      14550
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        paddingTop: 3,
                        paddingLeft: 40
                      }}
                    >
                      Tomato Bazil Soup
                    </Text>
                  </View>

                  <TouchableHighlight
                    title="Press"
                    style={{ paddingRight: 7, paddingTop: 20 }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../images/right.png")}
                    />
                  </TouchableHighlight>
                </View>
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
                        fontSize: 22,
                        paddingTop: 10,
                        paddingLeft: 40
                      }}
                    >
                      14550
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        paddingTop: 3,
                        paddingLeft: 40
                      }}
                    >
                      Tomato Bazil Soup
                    </Text>
                  </View>

                  <TouchableHighlight
                    title="Press"
                    style={{ paddingRight: 7, paddingTop: 20 }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../images/right.png")}
                    />
                  </TouchableHighlight>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
        <View>
          <TouchableHighlight
            style={styles.search}
            onPress={() => this.props.navigation.navigate("NoOfPax")}
            underlayColor="#fff"
          >
            <Text style={styles.submitText}>Continue Order</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "white",
    width: 300
  },
  searchIcon: {
    padding: 10,
    width: 20,
    height: 20
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242"
  },
  search: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 7,
    marginTop: 7,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#ff9800",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: 320,
    height: 50,
    alignSelf: "center"
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
    paddingTop: 5,
    fontSize: 18
  }
});

export default OrderScreen;
