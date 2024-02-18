import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { theme } from "./colors";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        {/* <TouchableOpacity>
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity> */}
        <TouchableWithoutFeedback onPress={() => console.log("pressed!!")}>
          <Text style={styles.btnText}>Work</Text>
        </TouchableWithoutFeedback>
        <TouchableHighlight underlayColor={"red"} activeOpacity={0.2}>
          <Text style={styles.btnText}>Travel</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 36,
    fontWeight: "600",
    color: theme.white,
  },
});
