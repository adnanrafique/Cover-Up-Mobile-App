import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function CategoriesScreen() {
  return (
    <WebView
      source={{
        uri: "https://coveruponline.com/index.php?route=product/catalog",
      }}
      style={{ flex: 1 }}
    />
  );
}

const styles = StyleSheet.create({});
