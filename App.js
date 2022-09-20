// MAIN BUILD FILE
import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/Home.js";
import { DetailsScreen } from "./screens/Login.js";
import { ulaz, UlazScreen } from "./screens/ulaz";
import { styles } from "./screens/Styles.jsx";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={DetailsScreen} />
          <Stack.Screen name="Ulaz" component={UlazScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
