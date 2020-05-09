import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./screens/auth/Login";
import newAccount from "./screens/auth/newAccount";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        component={Login}
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="newAccount" 
        component={newAccount}
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({

});

export default App;
