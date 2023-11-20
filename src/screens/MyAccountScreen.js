import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { WebView } from "react-native-webview";

import FloatingBtn from "../components/FloatingBtn";
import LeftBtn from "../components/LeftBtn";
import RightBtn from "../components/RightBtn";

export default function MyAccountScreen() {
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
          uri: "https://coveruponline.com/index.php?route=account/account",
        }}
        style={{ flex: 1 }}
        decelerationRate="fast"
        automaticallyAdjustContentInsets={true}
        onLoadEnd={() => setLoading(false)}
        onNavigationStateChange={onNavigationStateChange}
      />
      {loading && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="rgb(37,150,190)" />
        </View>
      )}
      {canGoBack && (
        <LeftBtn isHistory={loading ? false : true} onPressLeftBtn={goBack} />
      )}
      {canGoForward && (
        <RightBtn
          isHistory={loading ? false : true}
          onPressRightBtn={goForward}
        />
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
