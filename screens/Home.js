import React, { useContext } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Layout,
  Text,
  Modal,
  Button,
  TouchableOpacity
} from "react-native";
import { styles } from "./Styles.jsx";

import { useNavigation } from "@react-navigation/native";

TouchableOpacity.defaultProps = { activeOpacity: 0.75 };

const AppButton = ({ title }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Login")}
      style={styles.appButtonContainer}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

function HomeScreen() {
  return (
    <View style={styles.tvoamama}>
      <Image
        style={styles.LuckaUpravaLogo}
        source={require("./pictures/braintime.png")}
      />
      
      <AppButton title="Start your day!" size="sm" backgroundColor="#f60564" />
    </View>
  );
}

export { HomeScreen };
