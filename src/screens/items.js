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
  ScrollView,
  AsyncStorage,
  TouchableOpacity
} from "react-native";

class ItemsScreen extends Component {
  state = {
    selecteditem: "",
    categories: [],
    items: [],
    searching: null,
    catstates: {},
    searchquery: "",
    searchresults: []
  };

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData = async () => {
    const itms = await AsyncStorage.getItem("items");
    const items = JSON.parse(itms);
    //alert(JSON.stringify(items));
    if (items !== null) {
      //const tt = [{ SubCat: "a" }, { SubCat: "a" }, { SubCat: "a" }];

      const categories = this.parseCatogeries(items);
      this.setState({ items: items, categories: categories });
    } else {
      alert("Please sync with the server before placing an order.");
    }
  };

  parseCatogeries = items => {
    const categories = [];
    const catstates = {};
    for (var i = 0; i < items.length; i++) {
      if (!categories.includes(items[i].SubCat)) {
        categories.push(items[i].SubCat);
      }
    }
    for (var j = 0; j < categories.length; j++) {
      catstates[categories[j]] = null;
    }
    this.setState({ catstates });
    return categories;
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("type", "Item List"),
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
  };
  onDownClick = c => {
    const status = this.state.catstates[c];
    const s = { ...this.state.catstates };
    s[c] = !status;
    this.setState({ catstates: s });
  };
  cancelOrder = async () => {
    try {
      await AsyncStorage.removeItem("currentorder");
      this.props.navigation.navigate("Home");
    } catch (error) {
      alert(error);
    }
  };

  onItemClick = item => {
    try {
      this.props.navigation.navigate("ItemNormal", {
        item: JSON.stringify(item)
      });
    } catch (error) {
      alert(error);
    }
  };

  getIcon = c => {
    const icon = this.state.catstates[c]
      ? require("../images/up.png")
      : require("../images/down.png");

    return icon;
  };

  onSearch = searchquery => {
    this.setState({ searchquery });
    if (searchquery.length > 2) {
      this.setState({
        searchresults: this.search(searchquery, this.state.items)
      });
      this.setState({ searching: true });
    } else {
      this.setState({ searching: false });
    }
  };

  search = (query, items) => {
    let results = [];
    let querylength = query.length;
    for (let i = 0; i < items.length; i++) {
      if (items[i].ItemNo.substring(0, querylength) === query) {
        results.push(items[i]);
      }
    }
    return results;
  };

  render() {
    if (this.state.searching) {
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
                placeholder="Enter Item no"
                onChangeText={searchquery => this.onSearch(searchquery)}
                placeholderTextColor="#ADD8E6"
                value={this.state.searchquery}
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
              {this.state.searchresults.map(item => (
                <View key={item.ItemNo}>
                  <View
                    style={{
                      height: 75,
                      borderColor: "grey",
                      borderWidth: 1,
                      flexDirection: "row",
                      opacity: 1,
                      backgroundColor: "rgba(52, 52, 52, 0.3)"
                    }}
                    key={item.ItemNo}
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
                        {item.ItemNo}
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 15,
                          paddingTop: 3,
                          paddingLeft: 40
                        }}
                      >
                        {item.ItemName}
                      </Text>
                    </View>

                    <TouchableHighlight
                      title="Press"
                      style={{ paddingRight: 7, paddingTop: 20 }}
                      onPress={() => this.onItemClick(item)}
                    >
                      <Image
                        style={{ width: 30, height: 30 }}
                        source={require("../images/right.png")}
                      />
                    </TouchableHighlight>
                  </View>
                </View>
              ))}
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
              style={styles.searchs}
              onPress={() => this.props.navigation.navigate("CurrentOrder")}
              underlayColor="#fff"
            >
              <Text style={styles.submitText}>View Order</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.searchs}
              onPress={this.cancelOrder}
              underlayColor="#fff"
            >
              <Text style={styles.submitText}>Cancel Order</Text>
            </TouchableHighlight>
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
              placeholder="Enter Item no"
              onChangeText={searchquery => this.onSearch(searchquery)}
              placeholderTextColor="#ADD8E6"
              value={this.state.searchquery}
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
            {this.state.categories.map(c => {
              return (
                <TouchableOpacity
                  key={c}
                  onPress={() => this.onDownClick(c)}
                  activeOpacity={0.8}
                >
                  <View>
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
                        {c}
                      </Text>
                      <TouchableHighlight
                        style={{ paddingRight: 7, paddingTop: 58 }}
                        onPress={() => this.onDownClick(c)}
                      >
                        <Image
                          style={{ width: 30, height: 30 }}
                          source={this.getIcon(c)}
                        />
                      </TouchableHighlight>
                    </View>
                    {this.state.catstates[c] &&
                      this.state.items.map(item => {
                        if (item.SubCat === c) {
                          return (
                            <View key={item.ItemNo}>
                              <View
                                style={{
                                  height: 75,
                                  borderColor: "grey",
                                  borderWidth: 1,
                                  flexDirection: "row",
                                  opacity: 1,
                                  backgroundColor: "rgba(52, 52, 52, 0.3)"
                                }}
                                key={item.ItemNo}
                              >
                                <View
                                  style={{ flex: 1, flexDirection: "column" }}
                                >
                                  <Text
                                    style={{
                                      color: "white",
                                      fontSize: 22,
                                      paddingTop: 10,
                                      paddingLeft: 40
                                    }}
                                  >
                                    {item.ItemNo}
                                  </Text>
                                  <Text
                                    style={{
                                      color: "white",
                                      fontSize: 15,
                                      paddingTop: 3,
                                      paddingLeft: 40
                                    }}
                                  >
                                    {item.ItemName}
                                  </Text>
                                </View>

                                <TouchableHighlight
                                  style={{ paddingRight: 7, paddingTop: 20 }}
                                  onPress={() => this.onItemClick(item)}
                                >
                                  <Image
                                    style={{ width: 30, height: 30 }}
                                    source={require("../images/right.png")}
                                  />
                                </TouchableHighlight>
                              </View>
                            </View>
                          );
                        }
                      })}
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
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
  },
  searchs: {
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
  }
});

export default ItemsScreen;
