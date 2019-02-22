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
  TouchableOpacity,
  BackHandler
} from "react-native";

class ListItemScreen extends Component {
  _didFocusSubscription;
  _willBlurSubscription;

  constructor(props) {
    super(props);
    this._didFocusSubscription = props.navigation.addListener(
      "didFocus",
      payload =>
        BackHandler.addEventListener(
          "hardwareBackPress",
          this.onBackButtonPressAndroid
        )
    );
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener(
      "willBlur",
      payload =>
        BackHandler.removeEventListener(
          "hardwareBackPress",
          this.onBackButtonPressAndroid
        )
    );
    this.retrieveData();
  }

  onBackButtonPressAndroid = () => {
    if (this.state.order) {
      alert("You have an unfinished order. Please complete it.");
      return true;
    } else {
      return false;
    }
  };

  /*   componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  } */

  state = {
    selecteditem: "",
    categories: [],
    items: [],
    searching: null,
    catstates: {},
    searchquery: "",
    searchresults: [],
    order: false
  };

  retrieveData = async () => {
    const itms = await AsyncStorage.getItem("items");
    const order = await AsyncStorage.getItem("currentorder");
    const items = JSON.parse(itms);

    if (items !== null) {
      //const tt = [{ SubCat: "a" }, { SubCat: "a" }, { SubCat: "a" }];
      const categories = this.parseCatogeries(items);
      this.setState({ items: items, categories: categories });
    } else {
      alert("Please sync with the server before placing an order.");
    }
    if (order !== null) {
      this.setState({ order: true });
    } else {
      this.setState({ order: false });
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
      title: navigation.getParam("type", "Meal Type"),
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
      ),
      headerLeft: null
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
      const { navigation } = this.props;
      const pax = navigation.getParam("pax", "some default value");
      const dm = navigation.getParam("dm", "some default value");
      const table = navigation.getParam("table", "some default value");
      const phn = navigation.getParam("phn", "some default value");
      const name = navigation.getParam("name", "some default value");
      const address = navigation.getParam("address", "some default value");
      const roomno = navigation.getParam("roomno", "some default value");
      const type = navigation.getParam("type", "some default value");
      const start = navigation.getParam("start", "some default value");
      navigation.navigate("Item", {
        pax: pax,
        dm: dm,
        table: table,
        phn: phn,
        name: name,
        address: address,
        roomno: roomno,
        pax: pax,
        type: type,
        item: JSON.stringify(item),
        start: start
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

export default ListItemScreen;
