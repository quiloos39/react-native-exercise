import React, { useContext, useRef, useState } from "react";
import { Text, ScrollView, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Context } from "../context/Context";

export function AddUser({ navigation }) {
  const [firstName, setFirstName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const { dispatch } = useContext(Context);

  function addUser() {
    console.log(firstName, age);
    dispatch({
      type: "user/add",
      data: {
        firstName: firstName,
        age: age,
      },
    });
    navigation.pop();
  }

  return (
    <ScrollView>
      <Text>First Name</Text>
      <TextInput
        style={{ backgroundColor: "#fff" }}
        onChangeText={(e) => setFirstName(e)}
      />
      <Text>Age</Text>
      <TextInput
        style={{ backgroundColor: "#fff" }}
        onChangeText={(e) => setAge(Number(e))}
      />
      <Button title="Submit" onPress={addUser} />
      <Button title="Back" onPress={() => navigation.pop()} />
    </ScrollView>
  );
}
