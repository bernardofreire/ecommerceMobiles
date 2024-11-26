import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/app/Home";
import Cart from "./src/screens/app/Cart";

export type RootStackParamList = {
  Home: undefined; 
  Cart: undefined; 
};

const Stack = createStackNavigator<RootStackParamList>(); // Passando o tipo para o Stack Navigator

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
