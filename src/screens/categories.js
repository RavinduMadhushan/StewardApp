import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Image,
  Button,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  StatusBar,
  AsyncStorage,
  BackHandler
} from "react-native";

class CategoriesScreen extends Component {
  state = {
    cat: [],
    order: false
  };

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

  componentDidMount = () => {
    this._willBlurSubscription = this.props.navigation.addListener(
      "willBlur",
      payload =>
        BackHandler.removeEventListener(
          "hardwareBackPress",
          this.onBackButtonPressAndroid
        )
    );
    this.retrieveData();
  };

  onBackButtonPressAndroid = () => {
    if (this.state.order) {
      alert("You have an unfinished order. Please complete it.");
      return true;
    } else {
      return false;
    }
  };

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }

  retrieveData = async () => {
    try {
      const cat = await AsyncStorage.getItem("basecat");
      const order = await AsyncStorage.getItem("currentorder");
      // alert(cat);
      if (order !== null) {
        this.setState({ order: true });
      } else {
        this.setState({ order: false });
      }
      if (cat !== null) {
        this.setState({
          cat: JSON.parse(cat)
        });
        //alert(JSON.stringify(this.state));
      } else {
        this.setState({ cat: [] });
      }
    } catch (error) {
      alert(error);
    }
  };

  static navigationOptions = {
    title: "Main Categories",
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
    },
    headerLeft: null
  };

  onSubmit = type => {
    try {
      const { navigation } = this.props;
      const pax = navigation.getParam("pax", "some default value");
      const dm = navigation.getParam("dm", "some default value");
      const table = navigation.getParam("table", "some default value");
      const phn = navigation.getParam("phn", "some default value");
      const name = navigation.getParam("name", "some default value");
      const address = navigation.getParam("address", "some default value");
      const roomno = navigation.getParam("roomno", "some default value");
      const start = navigation.getParam("start", "some default value");
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
          height: "100%",
          flex: 1,
          flexDirection: "column"
        }}
      >
        <View>
          {this.state.cat.map(cat => {
            return (
              <TouchableOpacity
                key={cat}
                activeOpacity={0.8}
                onPress={() => this.onSubmit(cat)}
              >
                <View
                  style={{ height: 100, borderColor: "grey", borderWidth: 1 }}
                >
                  <Text
                    style={{
                      textAlign: "right",
                      color: "white",
                      fontSize: 30,
                      paddingTop: 52,
                      paddingRight: 10
                    }}
                  >
                    {cat}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ImageBackground>
    );
  }
}

export default CategoriesScreen;
