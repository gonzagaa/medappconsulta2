import React from "react";

import { View, Text } from "react-native";

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#FFF",
          fontSize: 18,
        }}
      >
        Loading...
      </Text>
    </View>
  );
}
