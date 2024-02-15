import { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import * as Location from "expo-location";
import { Fontisto } from "@expo/vector-icons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  const [ok, setOk] = useState(true);
  const [city, setCity] = useState("Loading...");
  // const [days, setDays] = useState([])

  const getWeather = async () => {
    // 권한 요청 - 거부 시
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }

    // 현재 위치
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
  };

  useEffect(() => {
    getWeather();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={styles.temp}>27</Text>
            <Fontisto name="cloudy" size={48} color="white" />
          </View>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
        <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={styles.temp}>17</Text>
            <Fontisto name="day-sunny" size={48} color="white" />
          </View>
          <Text style={styles.description}>Rainy</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>-7</Text>
          <Text style={styles.description}>Windy</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>0</Text>
          <Text style={styles.description}>Snowy</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 48,
    fontWeight: "500",
  },
  weather: {
    // flex: 3,
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    fontSize: 100,
    marginTop: 50,
  },
  description: {
    marginTop: -24,
    fontSize: 48,
  },
});
