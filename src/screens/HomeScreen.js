import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import { WebView } from "react-native-webview";

import FloatingBtn from "../components/FloatingBtn";
import LeftBtn from "../components/LeftBtn";
import RightBtn from "../components/RightBtn";

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const webViewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const goBack = () => {
    if (webViewRef.current && canGoBack) {
      webViewRef.current.goBack();
    }
  };

  const goForward = () => {
    if (webViewRef.current && canGoForward) {
      webViewRef.current.goForward();
    }
  };
  const onNavigationStateChange = (navState) => {
    setCanGoBack(navState.canGoBack);
    setCanGoForward(navState.canGoForward);
  };
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{
          uri: "https://coveruponline.com/",
        }}
        style={styles.webView}
        decelerationRate="fast"
        javaScriptEnabled={true}
        automaticallyAdjustContentInsets={true}
        onLoadEnd={() => setLoading(false)}
        // onLoadStart={() => setLoading(true)}
        onNavigationStateChange={onNavigationStateChange}
      />

      {loading && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="rgb(37,150,190)" />
        </View>
      )}

      <FloatingBtn />
      {canGoBack && (
        <LeftBtn isHistory={loading ? false : true} onPressLeftBtn={goBack} />
      )}
      {canGoForward && (
        <RightBtn
          isHistory={loading ? false : true}
          onPressRightBtn={goForward}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent", // Make the background of the navigation bar transparent
  },
  navigationButton: {
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  webView: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
});
