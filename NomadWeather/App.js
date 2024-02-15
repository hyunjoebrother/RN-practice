import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Vibration } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 12,
          color: "red",
        }}
      >
        Open up App.js
      </Text>
      <StatusBar style="light" />
      <Button onPress={() => Vibration.vibrate(PATTERN, true)}>진동</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 28,
  },
});
