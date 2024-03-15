import { View, FlatList, StyleSheet, Text } from "react-native";
// import { useRoute } from "@react-navigation/native"; alternative to what has been done
import { MEALS } from "../data/dummyData";
import MealItem from "../components/MealItem";

function MealsOverview({ route }) {
  // const route = useRoute(); alternative to what is done below
  // route.params.categoryId; alternative to what is done below
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return (
      <View>
        <MealItem {...mealItemProps}/>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
