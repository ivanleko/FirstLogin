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
  KeyboardAvoidingView,
  useEffect
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginScreen from "react-native-login-screen";
import { styles } from "./Styles.jsx";



function DetailsScreen() {
 const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={styles.tvoamama} behaviour="padding">
      <LoginScreen
        style={styles.tvoamama}
        logoImageStyle={styles.LuckaUpravaLogo}
        logoImageSource={require("./pictures/braintime.png")}
        //
        onLoginPress={() => navigation.navigate("Ulaz")}
        onEmailChange={(email: string) => {}}
        onPasswordChange={(password: string) => {}}
        //
        loginButtonText={"Login"}
        loginTextStyle={styles.appButtonText}
        loginButtonStyle={styles.novi}
        emailPlaceholder="your.name@hexis.hr"
        passwordPlaceholder="Password"
        //
        textInputContainerStyle={{color: "#fcb4d1"}}
        disableSocialButtons
        disableDivider
        disableSignup
      ></LoginScreen>
    </KeyboardAvoidingView>
  );
}

export { DetailsScreen };
