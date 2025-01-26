import { StyleSheet, Text, View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const logo = require("../assets/large-logo.png");

export function LogoHeader() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={header.logo}>
        <Image source={logo} style={{ width: 300, height: 100 }} />
        <Text style={header.textName}>Personal Income Assistant</Text>
      </View>
    </View>
  );
}

const header = StyleSheet.create({
  logo: {
    alignItems: "center",
    justifyContent: "center",
  },
  textName: {
    color: "#fff",
    fontSize: 17,
  },
});
