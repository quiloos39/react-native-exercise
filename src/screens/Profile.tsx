import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Text, ScrollView, Button, View, Image } from "react-native";
import { fetchData } from "../utils/fecthData";

export function Profile({ route, navigation }) {
  const { id } = route.params;
  const signalRef = useRef<AbortSignal>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    async function fetch() {
      try {
        const response = await fetchData({ signalRef });
        const user = response.data.users.find((user) => user.id === id);
        setUser(user);
        setLoading(false);
        return () => {
          if (signalRef.current) {
            const controller = new AbortController();
            controller.abort();
          }
        };
      } catch (e) {
        setError(e);
        if (signalRef.current) {
          const controller = new AbortController();
          controller.abort();
        }
      }
    }
    fetch();
  }, []);

  if (loading) {
    return <Text>Loading..</Text>;
  }

  if (error) {
    <Text>{error.message}</Text>;
  }

  const { firstName, image } = user;
  return (
    <ScrollView>
      <View>
        <Image source={{ uri: image }} style={{ height: 100, width: 100 }} />
        <Text>{firstName}</Text>
      </View>
      <Button title="Back" onPress={() => navigation.pop()} />
    </ScrollView>
  );
}
