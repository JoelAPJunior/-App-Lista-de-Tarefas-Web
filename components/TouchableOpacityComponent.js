import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function TouchableOpacityComponent({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}
