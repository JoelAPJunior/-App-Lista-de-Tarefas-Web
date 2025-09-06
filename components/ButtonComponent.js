import React from "react";
import { Button } from "react-native";

export default function ButtonComponent({ title, onPress }) {
  return <Button title={title} onPress={onPress} />;
}
