import React from "react";
import { Text, TouchableOpacity, ImageBackground } from "react-native";

export function Avatar({ user, onNavigateProfile, onRemove }) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        height: 100,
        position: "relative",
        marginBottom: 20,
      }}
      onPress={onNavigateProfile}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 20,
          height: 20,
          backgroundColor: "red",
        }}
        onPress={onRemove}
      />
      <ImageBackground
        source={{ uri: user.image }}
        resizeMode="contain"
        style={{ flex: 1, width: 100, height: 100 }}
      >
        <Text>
          {user.firstName}, {user.age}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
