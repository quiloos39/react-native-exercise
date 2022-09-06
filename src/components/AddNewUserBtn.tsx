import React from "react";
import { Button } from "react-native";

export function AddNewUserBtn({ onPress }) {
  return <Button title="Add new user" onPress={onPress} />;
}
