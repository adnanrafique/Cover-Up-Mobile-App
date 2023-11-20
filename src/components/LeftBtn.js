import React from "react";

import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
  Linking,
} from "react-native";
import { Left_icon, Whatsapp_icon } from "../assets/assetIndex";

const screen_width = Dimensions.get("screen").width;
const screen_height = Dimensions.get("screen").height;
export default function LeftBtn({ onPressLeftBtn, isHistory }) {
  return (
    isHistory && (
      <TouchableOpacity
        onPress={onPressLeftBtn}
        activeOpacity={0.9}
        style={styles.floatingBtnStyle}
      >
        <Left_icon height={50} width={50} />
      </TouchableOpacity>
    )
  );
}

const styles = StyleSheet.create({
  floatingBtnStyle: {
    position: "absolute",
    bottom: Platform.OS === "android" ? screen_height * 0 : screen_height * 0.4,
    left: screen_width * 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
