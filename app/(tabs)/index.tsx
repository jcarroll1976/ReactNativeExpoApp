import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={PlaceholderImage} style={styles.image} />
      <Text style={styles.text}>Hello World!</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e"
  },
  text: {
    color: "white"
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff"
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  }
})