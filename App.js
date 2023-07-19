import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View id="header" style={styles.header}></View>

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View id="footer" style={styles.header}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "red",
    height: 80,
    width: "100%",
  },
});
