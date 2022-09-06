import React, { useContext, useRef, useEffect } from "react";
import { Text, View } from "react-native";
import { Context } from "../context/Context";
import { fetchData } from "../utils/fecthData";

export default function Splash() {
  const { dispatch } = useContext(Context);
  const signalRef = useRef<AbortSignal>();
  useEffect(() => {
    async function fetch() {
      try {
        const response = await fetchData({ signalRef });
        dispatch({ type: "fetch/data", data: response.data.users });
      } catch (e) {
        dispatch({ type: "fetch/error", data: e });
      }
    }
    fetch();
    return () => {
      if (signalRef.current) {
        const controller = new AbortController();
        controller.abort();
      }
    };
  }, []);
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}
