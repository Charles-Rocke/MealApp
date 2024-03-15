// Add screen
// register as a screen
// navigate to screen when pressed
// pass mealId to screen of the meal that was selected

import { View, Text } from "react-native";

function MealDetails({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>{mealId}</Text>
    </View>
  );
}

export default MealDetails;
