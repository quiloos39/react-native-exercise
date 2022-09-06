import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { Context } from "../context/Context";
import { Avatar } from "../components/Avatar";
import { AddNewUserBtn } from "../components/AddNewUserBtn";

export function Home({ navigation }) {
  const { state, dispatch } = useContext(Context);
  return (
    <FlatList
      data={state.data}
      contentContainerStyle={{
        paddingVertical: 20,
      }}
      renderItem={({ item: user }) => (
        <Avatar
          key={user.id}
          user={user}
          onNavigateProfile={() =>
            navigation.navigate("Profile", { id: user.id })
          }
          onRemove={() =>
            dispatch({ type: "user/remove", data: { id: user.id } })
          }
        />
      )}
      ListFooterComponent={() => (
        <AddNewUserBtn onPress={navigation.navigate("AddUser")} />
      )}
      numColumns={2}
      style={{
        flex: 1,
      }}
    />
  );
}
