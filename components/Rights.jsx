import { StyleSheet, Text } from "react-native";

export function Rights() {
  return (
    <>
      <Text style={main.rights}>
        © 2025 PIA - Personal Income Assistant. All rights reserved.
      </Text>
    </>
  );
}

const main = StyleSheet.create({
  rights: {
    justifyContent: "center",
    alignContent: "center",
    color: "#999",
    position: "absolute",
    fontSize: 12,
    bottom: 30,
  },
});
