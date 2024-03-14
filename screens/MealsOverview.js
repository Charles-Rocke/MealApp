import { View, Text, StyleSheet } from "react-native";
// import { useRoute } from "@react-navigation/native"; alternative to what has been done
import { MEALS } from "../data/dummyData";

function MealsOverview({ route }) {
  // const route = useRoute(); alternative to what is done below
  // route.params.categoryId; alternative to what is done below
  const categoryId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen -- {categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverview;
