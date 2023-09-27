import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("MyTabs");
    }, 2000);
  }, []);

  return (
    <View style={styles.mainCont}>
      <Image
        source={require("../assets/images/appIcon.jpeg")}
        style={styles.imgStyle}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imgStyle: {
    height: 100,
    width: 100,
  },
});
