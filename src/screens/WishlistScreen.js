import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function WishlistScreen() {
  return (
    <WebView
      source={{
        uri: "https://coveruponline.com/index.php?route=account/wishlist",
      }}
      style={{ flex: 1 }}
    />
  );
}

const styles = StyleSheet.create({});