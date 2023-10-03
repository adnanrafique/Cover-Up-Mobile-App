import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { WebView } from "react-native-webview";
import FloatingBtn from "../components/FloatingBtn";

export default function CategoriesScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const handleWebViewLoad = () => {
    setIsLoading(false);
  };
  return (
    <>
      {isLoading && (
        <ActivityIndicator
          size={"large"}
          color={"blue"}
          style={{
            marginTop: 40,
            position: "absolute",
            top: Dimensions.get("screen").height * 0.4,
            left: 0,
            right: 0,
          }}
        />
      )}
      <WebView
        source={{
          uri: "https://coveruponline.com/index.php?route=product/catalog",
        }}
        onLoad={handleWebViewLoad}
        style={{ flex: 1 }}
      />
      <FloatingBtn />
    </>
  );
}

const styles = StyleSheet.create({});
