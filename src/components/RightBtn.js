import React from "react";

import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
  Linking,
} from "react-native";
import { Right_icon, Whatsapp_icon } from "../assets/assetIndex";

const screen_width = Dimensions.get("screen").width;
const screen_height = Dimensions.get("screen").height;
export default function RightBtn({ onPressRightBtn, isHistory }) {
  return (
    isHistory && (
      <TouchableOpacity
        onPress={onPressRightBtn}
        activeOpacity={0.9}
        style={styles.floatingBtnStyle}
      >
        <Right_icon height={50} width={50} />
      </TouchableOpacity>
    )
  );
}

const styles = StyleSheet.create({
  floatingBtnStyle: {
    position: "absolute",
    bottom: Platform.OS === "android" ? screen_height * 0 : screen_height * 0.4,
    right: screen_width * 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
