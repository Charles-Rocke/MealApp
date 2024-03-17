import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Categories from "./screens/Categories";
import MealsOverview from "./screens/MealsOverview";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

/*
The first screen is dictated by order (1st) or using the initialRouteName prop
{/* <NavStack.Screen initialRouteName="ProductDetails" /> 
*/

const NavStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#000033" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#5959c7" },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "All Categories",
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <NavStack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#000033" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#5959c7" },
          }}
        >
          <NavStack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{
              title: "All Categories",
              headerShown: false,
            }}
          />
          <NavStack.Screen
            name="MealsOverview"
            component={MealsOverview}
            // options={({ route, navigation }) => {
            //   const categoryId = route.params.categoryId;
            //   return {
            //     title: categoryId,
            //   };
            // }} Alternative in MealsOverview.js useEffect
          />
          <NavStack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={{
              title: "About Meal",
            }}
            // options={{
            //   headerRight: () => {
            //     return <Button title="Save" />;
            //   },
            // }}
          />
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
