import { View } from "react-native";
import { Slot } from "expo-router";
import { Rights } from "../components/Rights";

export default function Layout() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#141414",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Slot />
      <Rights />
    </View>
  );
}
