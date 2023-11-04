import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { WebView } from "react-native-webview";

import FloatingBtn from "../components/FloatingBtn";

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{
          uri: "https://coveruponline.com/",
        }}
        style={{ flex: 1 }}
        onLoadEnd={() => setLoading(false)}
      />
      {loading && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="rgb(37,150,190)" />
        </View>
      )}
      <FloatingBtn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
});
