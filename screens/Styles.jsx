import React, { Component } from "react";
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
  Platform
} from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingBottom: Platform.OS === "android" ? 25 : 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  tvoamama: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#fff",
    flex: 1
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#f60564",
    borderRadius: 10,
    paddingVertical: 28
  },
  appButtonText: {
    fontSize: 19,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  LuckaUpravaLogo: {
    flex: 1,
    width: "50%",
    alignSelf: "center",
    resizeMode: "contain"
  },
  novi: {
    backgroundColor: "#0a2543",
    height: 50
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: "70%"
  } ,
  timerContainer:{
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 130, 
    paddingHorizontal: 30
  },
  timer:{
    color:"black",
    fontSize:76,
    fontWeight:"200",
    width:112
  },
  button:{
    width:90,
    height :90,
    borderRadius: 33,
    justifyContent: "center",
    alignItems:"center"
  },
  buttonTitle:{
    fontSize: 18,
     
  },
  buttonBorder:{
    width: 90,
    height: 90,
    borderRadius: 33,
    borderWidth: 3,
    justifyContent: "center",
    alignItems:"center",
  },
  buttonsRow:{
    flexDirection:"row",
    alignSelf: "stretch",
    justifyContent:"space-between",
    marginTop: 80,
    marginBottom: 30
  },
  lapText:{
    color:"black",
    fontSize: 18,

  },
  laptimer:{
    width: 30,
  },
  lap:{
    flexDirection:"row",
    justifyContent:"space-between",
    borderColor:"#0a2543",
    borderTopWidth: 1,
    paddingVertical: 10
  },
  scrollView:{
    alignSelf:"stretch"
  },
  fastest: {
    color:"#4bc05f"
  },
  slowest:{
    color:"#cc3531"
  }
});
