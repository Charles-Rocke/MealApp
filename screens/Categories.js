import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummyData";
import CategoryGridTile from "../components/CategoryGridTile.js";

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

function Categories() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}

export default Categories;
