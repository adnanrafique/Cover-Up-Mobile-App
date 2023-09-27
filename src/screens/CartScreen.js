import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function CartScreen() {
  return (
    <WebView
      source={{
        uri: "https://coveruponline.com/index.php?route=checkout/cart",
      }}
      style={{ flex: 1 }}
    />
  );
}

const styles = StyleSheet.create({});
