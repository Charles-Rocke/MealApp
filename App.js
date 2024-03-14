import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "./screens/Categories";
import MealsOverview from "./screens/MealsOverview";

const NavStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <NavStack.Navigator>
          {/* The first screen is dictated by order (1st) or using the initialRouteName prop */}
          {/* <NavStack.Screen initialRouteName="ProductDetails" />  */}
          <NavStack.Screen name="Meals Categories" component={Categories} />
          <NavStack.Screen name="Meals Overview" component={MealsOverview} />
        </NavStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffcf0",
    alignItems: "center",
    justifyContent: "center",
  },
});
