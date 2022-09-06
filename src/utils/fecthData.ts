import axios from "axios";
import React from "react";

type FetchData = {
  signalRef: React.MutableRefObject<AbortSignal | undefined>;
};

interface User {
  age: number;
  id: number;
  firstName: number;
}

interface Response {
  users: User[];
}

export function fetchData({ signalRef }: FetchData) {
  return axios.get<Response>("https://dummyjson.com/users", {
    signal: signalRef.current,
  });
}
