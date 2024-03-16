import { Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      {/* {onPress ? (
        <FontAwesome name="bookmark-o" size={24} color="white" />
      ) : (
        <FontAwesome name="bookmark" size={24} color="white" />
      )} */}
      <FontAwesome name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;
