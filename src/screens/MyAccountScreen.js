import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import FloatingBtn from "../components/FloatingBtn";

export default function MyAccountScreen() {
  return (
    <>
      <WebView
        source={{
          uri: "https://coveruponline.com/index.php?route=account/account",
        }}
        style={{ flex: 1 }}
      />
      <FloatingBtn />
    </>
  );
}

const styles = StyleSheet.create({});
