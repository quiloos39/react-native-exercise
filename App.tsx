import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Context, ContextProvider } from "./src/context/Context";
import { Home } from "./src/screens/Home";
import { Profile } from "./src/screens/Profile";
import Splash from "./src/screens/Splash";
import { AddUser } from "./src/screens/AddUser";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <ContextProvider>
      <ScreenWrapper />
    </ContextProvider>
  );
}

function ScreenWrapper() {
  const { state } = useContext(Context);

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {state.loading ? (
          <RootStack.Screen name="Splash" component={Splash} />
        ) : (
          <RootStack.Group>
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="Profile" component={Profile} />
            <RootStack.Screen name="AddUser" component={AddUser} />
          </RootStack.Group>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
