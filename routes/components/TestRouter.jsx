import { View, Text, Button } from "react-native";

export function TestRouter({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go to Volume 1" onPress={() => navigation.navigate("Volume1")} />
      <Button title="Go to Volume 2" onPress={() => navigation.navigate("Volume2")} />
      <Button title="Go to Volume 3" onPress={() => navigation.navigate("Volume3")} />
      <Button title="Go to KitComponents" onPress={() => navigation.navigate("ComponentArduinoUno")} />
    </View>
  );
}
