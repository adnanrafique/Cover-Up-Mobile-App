import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

import FloatingBtn from "../components/FloatingBtn";

export default function HomeScreen() {
  return (
    <>
      <WebView
        source={{
          uri: "https://coveruponline.com/",
        }}
        style={{ flex: 1 }}
      />
      <FloatingBtn />
    </>
  );
}

const styles = StyleSheet.create({});
