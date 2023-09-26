import * as React from "react";

import { Volume } from "../Views/Volumes/Volume";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TestRouter } from "./components/TestRouter";
import Home from "../Views/Home/Home";
import { KitComponent } from "../Views/KitComponent/KitComponent";

export function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TestRouter">
        <Stack.Screen name="TestRouter" component={TestRouter} options={{ title: "Test Router" }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Volume1">{(props) => <Volume {...props} color={"green"} />}</Stack.Screen>
        <Stack.Screen name="Volume2">{(props) => <Volume {...props} color={"orange"} />}</Stack.Screen>
        <Stack.Screen name="Volume3">{(props) => <Volume {...props} color={"yellow"} />}</Stack.Screen>
        <Stack.Screen name="ComponentArduinoUno">{(props) => <KitComponent {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
